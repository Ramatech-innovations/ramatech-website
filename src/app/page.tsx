import { HomePageSections } from "@/components/home/home-sections";
import { createMetadata } from "@/lib/seo";
import { pageMeta } from "@/content/page-meta";

export const metadata = createMetadata({
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  path: "/",
});

export default function HomePage() {
  return <HomePageSections />;
}
