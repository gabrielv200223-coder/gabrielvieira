import { motion } from "framer-motion";

export function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#0a0a0f" }} />
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-[55rem] w-[55rem] rounded-full"
        style={{
          background: "radial-gradient(circle, #2a0008 0%, transparent 65%)",
          opacity: 0.55,
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-40 h-[45rem] w-[45rem] rounded-full"
        style={{
          background: "radial-gradient(circle, #2a0008 0%, transparent 70%)",
          opacity: 0.5,
          filter: "blur(70px)",
        }}
        animate={{ x: [0, -50, 30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 h-[40rem] w-[40rem] rounded-full"
        style={{
          background: "radial-gradient(circle, #1a0005 0%, transparent 70%)",
          opacity: 0.4,
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 40, -40, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
