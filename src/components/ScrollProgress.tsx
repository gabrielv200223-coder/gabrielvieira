import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left"
      style={{ scaleX, backgroundColor: "#e81035", boxShadow: "0 0 12px #e81035" }}
    />
  );
}
