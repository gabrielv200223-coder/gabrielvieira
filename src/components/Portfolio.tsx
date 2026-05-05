import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  { id: "anuncios", label: "Anúncios" },
  { id: "cortes", label: "Cortes" },
  { id: "reels", label: "Reels & Edits" },
] as const;

type TabId = (typeof tabs)[number]["id"];

type Item = { title: string; meta: string; video?: string };

const adVideos = [
  "/videos/ad-1.mp4",
  "/videos/ad-2.mp4",
  "/videos/ad-3.mp4",
  "/videos/ad-4.mp4",
  "/videos/ad-5.mp4",
  "/videos/ad-6.mp4",
  "/videos/ad-7.mp4",
  "/videos/ad-8.mp4",
];

const items: Record<TabId, Item[]> = {
  anuncios: Array.from({ length: 8 }, (_, i) => ({
    title: `Campanha ${String(i + 1).padStart(2, "0")}`,
    meta: "Publicidade",
    video: adVideos[i],
  })),
  cortes: Array.from({ length: 8 }, (_, i) => ({
    title: `Corte ${String(i + 1).padStart(2, "0")}`,
    meta: "01:20 · Podcast",
  })),
  reels: Array.from({ length: 8 }, (_, i) => ({
    title: `Reel ${String(i + 1).padStart(2, "0")}`,
    meta: "00:15 · Social",
  })),
};

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
    </svg>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<TabId>("anuncios");

  return (
    <section id="portfolio" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-white/40">Portfolio</p>
          <h2 className="text-6xl md:text-8xl">Trabalhos</h2>
        </motion.div>

        <div className="mb-14 flex justify-center">
          <div className="glass inline-flex rounded-full p-1.5">
            {tabs.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className="relative rounded-full px-5 py-2.5 text-sm tracking-wide transition-colors md:px-7"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(180deg, rgba(232,16,53,0.18), rgba(232,16,53,0.06))",
                        border: "1px solid rgba(232,16,53,0.55)",
                        boxShadow: "0 0 20px -4px rgba(232,16,53,0.45)",
                      }}
                      transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                    />
                  )}
                  <span
                    className={`relative ${isActive ? "text-white" : "text-white/55 hover:text-white/80"}`}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {items[active].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="glass glass-hover grain group relative aspect-video cursor-pointer overflow-hidden rounded-xl"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 30%, #1a0008 0%, transparent 60%), linear-gradient(180deg, #0d0d12, #050507)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.6 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="glass flex h-14 w-14 items-center justify-center rounded-full text-white/90 transition-all duration-500 group-hover:text-[color:#e81035]"
                    style={{ paddingLeft: 4 }}
                  >
                    <PlayIcon />
                  </motion.div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                  <div>
                    <p className="text-sm text-white/90">{item.title}</p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                      {item.meta}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
