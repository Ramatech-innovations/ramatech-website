"use client";

import type { ComponentType } from "react";
import { SupportRoutingViz } from "./support-routing-viz";
import { LeadScoringViz } from "./lead-scoring-viz";
import { WorkflowOrchestratorViz } from "./workflow-orchestrator-viz";
import { KnowledgeGraphViz } from "./knowledge-graph-viz";
import { AiOpsViz } from "./ai-ops-viz";

const VIZ_MAP: Record<string, ComponentType> = {
  "support-agents": SupportRoutingViz,
  "lead-qualification": LeadScoringViz,
  "workflow-automation": WorkflowOrchestratorViz,
  "knowledge-systems": KnowledgeGraphViz,
  operations: AiOpsViz,
};

export function AiCardViz({ id }: { id: string }) {
  const Viz = VIZ_MAP[id] ?? AiOpsViz;
  return <Viz />;
}
