/**
 * Reports pages under /openshift/*, /technology/*, /insights/*, /case-studies/*
 * with zero inbound internal links from scanned source files and known listings.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { caseStudies } from "../src/content/case-studies";
import { insightArticles } from "../src/content/insights/articles";
import { openshiftGeoPages } from "../src/content/openshift/geo-pages";
import { openshiftIndiaCityPages } from "../src/content/openshift/india-city-pages";
import { openshiftServices } from "../src/content/openshift/services";
import { stackCategories } from "../src/content/stack";
import { technologyPages } from "../src/content/technology-pages";
import { getSitemapEntries } from "../src/lib/site-routes";

const ROOT = join(import.meta.dirname, "..");
const SCAN_DIRS = ["src/content", "src/components", "src/app"];

const LINK_PREFIXES = [
  "/openshift/",
  "/technology/",
  "/insights/",
  "/case-studies/",
];

const HREF_ATTR_RE =
  /href=["'](\/(?:openshift|technology|insights|case-studies)[^"']*)["']/g;
const HREF_PROP_RE =
  /href:\s*["'](\/(?:openshift|technology|insights|case-studies)[^"']*)["']/g;
const MD_LINK_RE =
  /\]\((\/(?:openshift|technology|insights|case-studies)[^)]*)\)/g;

function normalizePath(href: string): string {
  const path = href.split("#")[0].split("?")[0];
  return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
}

function isTargetPath(path: string): boolean {
  return LINK_PREFIXES.some((prefix) => path.startsWith(prefix));
}

function collectFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      collectFiles(full, acc);
    } else if (/\.(ts|tsx)$/.test(entry)) {
      acc.push(full);
    }
  }
  return acc;
}

function extractLinks(content: string): string[] {
  const links: string[] = [];
  for (const re of [HREF_ATTR_RE, HREF_PROP_RE, MD_LINK_RE]) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(content)) !== null) {
      links.push(normalizePath(m[1]));
    }
  }
  return links;
}

function addInbound(
  inbound: Map<string, Set<string>>,
  target: string,
  source: string
) {
  if (!inbound.has(target)) return;
  inbound.get(target)!.add(source);
}

function applyListingPageLinks(inbound: Map<string, Set<string>>) {
  for (const study of caseStudies) {
    addInbound(
      inbound,
      `/case-studies/${study.slug}`,
      "listing:/case-studies"
    );
  }

  for (const article of insightArticles) {
    addInbound(
      inbound,
      `/insights/openshift/${article.slug}`,
      "listing:/insights/openshift"
    );
  }

  for (const page of technologyPages) {
    addInbound(inbound, `/technology/${page.slug}`, "listing:/technology");
  }

  for (const cat of stackCategories) {
    for (const tool of cat.tools) {
      if (tool.href) {
        addInbound(inbound, normalizePath(tool.href), "src/content/stack.ts");
      }
    }
  }

  for (const service of openshiftServices) {
    addInbound(
      inbound,
      `/openshift/${service.slug}`,
      "listing:/openshift"
    );
  }

  for (const geo of openshiftGeoPages) {
    addInbound(inbound, `/openshift/${geo.slug}`, "listing:/openshift");
  }

  for (const city of openshiftIndiaCityPages) {
    addInbound(
      inbound,
      `/openshift/india/${city.slug}`,
      "listing:/openshift/india"
    );
  }
}

function main() {
  const targets = new Set(
    getSitemapEntries()
      .map((e) => e.path)
      .filter(isTargetPath)
  );

  const inbound = new Map<string, Set<string>>();
  for (const t of targets) {
    inbound.set(t, new Set());
  }

  const files: string[] = [];
  for (const dir of SCAN_DIRS) {
    collectFiles(join(ROOT, dir), files);
  }

  for (const file of files) {
    const content = readFileSync(file, "utf8");
    const links = extractLinks(content);
    const source = relative(ROOT, file);
    for (const link of links) {
      addInbound(inbound, link, source);
    }
  }

  applyListingPageLinks(inbound);

  const orphans = [...targets].filter((t) => inbound.get(t)!.size === 0).sort();

  console.log(`Scanned ${files.length} source files`);
  console.log(`Tracked ${targets.size} routes under OpenShift / Technology / Insights / Case studies\n`);

  if (orphans.length === 0) {
    console.log("No orphaned pages found.");
    return;
  }

  console.log(`Orphaned pages (${orphans.length}):`);
  for (const path of orphans) {
    console.log(`  - ${path}`);
  }
  process.exit(1);
}

main();
