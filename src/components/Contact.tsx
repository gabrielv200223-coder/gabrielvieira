import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  message: z.string().trim().min(1, "Escreva uma mensagem").max(1000),
});

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      setStatus("error");
      setErrorMsg(result.error.issues[0]?.message ?? "Verifique os campos");
      return;
    }
    setStatus("sending");
    const text = `Olá! Sou ${result.data.name} (${result.data.email}).%0A%0A${encodeURIComponent(result.data.message)}`;
    window.open(`https://wa.me/5554996276214?text=${text}`, "_blank", "noopener,noreferrer");
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="relative px-6 py-32 md:py-44">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-xs uppercase tracking-[0.5em] text-white/40"
        >
          Contato
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl leading-[1] md:text-8xl"
        >
          Vamos <em className="italic font-light text-white/80">conversar.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="https://wa.me/5554996276214"
            target="_blank"
            rel="noopener noreferrer"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            whileHover={{ scale: 1.03 }}
            className="glass glass-hover shimmer-sweep group inline-flex items-center gap-4 rounded-full px-9 py-5 text-base text-white/95"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(232,16,53,0.1), 0 0 40px -10px rgba(232,16,53,0.25)",
            }}
          >
            <span className="text-[color:#e81035] transition-all duration-500 group-hover:drop-shadow-[0_0_10px_#e81035]">
              <WhatsAppIcon />
            </span>
            <span className="tracking-wide">Chamar no WhatsApp</span>
          </motion.a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="glass mx-auto mt-16 max-w-2xl rounded-3xl p-8 text-left md:p-10"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}
          noValidate
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-3 block text-[10px] uppercase tracking-[0.4em] text-white/50">
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome"
                maxLength={100}
                className="w-full rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-base italic text-white/90 placeholder:text-white/30 outline-none transition-all focus:border-[#e81035]/50 focus:bg-white/[0.05]"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-3 block text-[10px] uppercase tracking-[0.4em] text-white/50">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="voce@email.com"
                maxLength={255}
                className="w-full rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-base italic text-white/90 placeholder:text-white/30 outline-none transition-all focus:border-[#e81035]/50 focus:bg-white/[0.05]"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-3 block text-[10px] uppercase tracking-[0.4em] text-white/50">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Conte sobre seu projeto..."
                maxLength={1000}
                className="w-full rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-4 text-base italic text-white/90 placeholder:text-white/30 outline-none transition-all focus:border-[#e81035]/50 focus:bg-white/[0.05]"
              />
            </div>

            {status === "error" && (
              <p className="text-sm italic text-[#e81035]">{errorMsg}</p>
            )}
            {status === "sent" && (
              <p className="text-sm italic text-white/60">Mensagem pronta — abrindo WhatsApp...</p>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="glass glass-hover shimmer-sweep group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.3em] text-white/90 disabled:opacity-50"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(232,16,53,0.1), 0 0 30px -12px rgba(232,16,53,0.25)",
                }}
              >
                Enviar mensagem
                <span
                  className="inline-block h-[1px] w-8 transition-all duration-500 group-hover:w-14"
                  style={{ backgroundColor: "#e81035" }}
                />
              </button>
            </div>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="mailto:seuemail@email.com"
            className="text-sm italic text-white/35 underline-offset-4 transition-colors hover:text-white/70 hover:underline"
          >
            Prefere e-mail? Clique aqui
          </a>
        </motion.div>
      </div>
    </section>
  );
}
