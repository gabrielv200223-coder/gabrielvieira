import { motion } from "framer-motion";

const tagline = "Não edito só vídeos. Eu entendo pessoas.".split(" ");

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-8 text-xs uppercase tracking-[0.5em] text-white/40"
        >
          Editor de Vídeo · Anúncios
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className="text-[14vw] leading-[0.85] tracking-[-0.04em] sm:text-[9rem] md:text-xs font-sans font-extrabold text-center"
          style={{ fontWeight: 900 }}
        >
          Gabriel Vieira
        </motion.h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-lg italic text-white/70 md:text-2xl">
          {tagline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 + i * 0.08 }}
              className="font-light font-sans"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 1.4 }}
          className="mt-14"
        >
          <a
            href="#portfolio"
            className="glass glass-hover shimmer-sweep group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.3em] text-white/85 font-sans font-normal"
          >
            Ver trabalhos
            <span
              className="inline-block h-[1px] w-8 transition-all duration-500 group-hover:w-14"
              style={{ backgroundColor: "#e81035" }}
            />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/30"
      >
        ↓ scroll
      </motion.div>
    </section>
  );
}
