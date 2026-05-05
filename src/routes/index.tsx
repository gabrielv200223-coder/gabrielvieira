import { createFileRoute } from "@tanstack/react-router";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gabriel — Editor de Vídeo & Anúncios" },
      {
        name: "description",
        content:
          "Portfólio de Gabriel, editor de vídeo especializado em anúncios. Não edito só vídeos. Eu entendo pessoas.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <BackgroundOrbs />
      <ScrollProgress />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <footer className="border-t border-white/5 px-6 py-10 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/35">
          Gabriel Vieira <span style={{ color: "#e81035" }}>©</span> 2025
        </p>
      </footer>
    </main>
  );
}
