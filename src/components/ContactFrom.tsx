import { Send } from "lucide-react";
import { useState } from "react";

export const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simular envío
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      // Resetear estado después de 3 seg
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-left bg-slate-800/30 p-8 rounded-lg border border-slate-800 backdrop-blur-sm"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Nombre
          </label>
          <input
            required
            type="text"
            id="name"
            className="bg-slate-900/50 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            className="bg-slate-900/50 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
          Mensaje
        </label>
        <textarea
          required
          id="message"
          rows={4}
          className="bg-slate-900/50 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition-colors resize-none"
          placeholder="Hola, me gustaría hablar sobre un proyecto..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className={`w-full py-4 rounded font-medium transition-all flex justify-center items-center gap-2 ${
          status === "success"
            ? "bg-green-500/20 text-green-400 border border-green-500/50 cursor-default"
            : "bg-teal-500 text-slate-900 hover:bg-teal-400 font-bold"
        }`}
      >
        {status === "idle" && (
          <>
            Enviar Mensaje <Send size={18} />
          </>
        )}
        {status === "submitting" && "Enviando..."}
        {status === "success" && "¡Mensaje Enviado!"}
      </button>
    </form>
  );
};
