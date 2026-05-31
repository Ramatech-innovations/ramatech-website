"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AiMotionProvider, useAiMotionContext } from "./motion/ai-motion-context";
import { AiCardViz } from "./viz";
import { aiCardHover } from "@/lib/motion";

type Card = {
  id: string;
  title: string;
  description: string;
};

function VizPanel({ cardId }: { cardId: string }) {
  const { setHovered } = useAiMotionContext();

  return (
    <div
      className="mb-4 aspect-[2/1] max-h-[160px] w-full overflow-hidden rounded-xl border border-white/5 bg-[#0a1224]/60 shadow-[inset_0_0_24px_rgba(17,211,232,0.06)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AiCardViz id={cardId} />
    </div>
  );
}

export function AiSystemCard({
  card,
  index,
  sectionActive,
}: {
  card: Card;
  index: number;
  sectionActive: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <AiMotionProvider sectionActive={sectionActive}>
      <motion.article
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-4 shadow-inner shadow-white/[0.02] backdrop-blur-sm transition-[border-color,box-shadow] hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/10"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: index * 0.05 }}
        whileHover={reduce ? undefined : aiCardHover.hover}
      >
        <VizPanel cardId={card.id} />
        <h3 className="font-heading text-base font-semibold md:text-lg">{card.title}</h3>
        <p className="type-body-muted mt-3">{card.description}</p>
      </motion.article>
    </AiMotionProvider>
  );
}
