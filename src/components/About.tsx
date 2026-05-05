import { motion } from "framer-motion";

const tags = ["Introspectivo", "Leitura de Padrões", "Foco no Humano", "Contador de Histórias"];

export function About() {
  return (
    <section id="sobre" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[5fr_7fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass grain relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, #1a0008 0%, transparent 60%), linear-gradient(180deg, #0d0d12 0%, #050507 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-end justify-start p-8">
            <span className="text-xs uppercase tracking-[0.4em] text-white/30">retrato · 2025</span>
          </div>
          <div
            className="absolute right-6 top-6 h-2 w-2 rounded-full"
            style={{ backgroundColor: "#e81035", boxShadow: "0 0 10px #e81035" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-white/40">Sobre</p>
          <h2 className="mb-10 text-5xl leading-[1.05] md:text-6xl">
            Pra quem mais observa <em className="font-light italic text-white/70">do que fala</em>,
            entender pessoas fica fácil.
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-white/75 md:text-xl">
            <p>
              Opa, tudo certo? Me chamo <span className="text-white">Gabriel</span>. Sou estudante
              de Publicidade e sempre tive como hobbie editar vídeos para mim mesmo na adolescência
              — eu tinha o sonho de crescer no YouTube.
            </p>
            <p>
              Em consequência disso, comecei desde cedo a tratar vídeos como uma forma de jornada na
              qual o espectador não pode desviar e precisa terminar.
            </p>
            <p>Hoje eu trabalho com isso.</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                className="glass rounded-full px-5 py-2 text-sm italic text-white/70"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
