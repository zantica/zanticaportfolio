import { Send } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Configuración de formulario incompleta");
      return;
    }

    formData.append("access_key", accessKey);

    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Error de conexión. Por favor intenta de nuevo.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-left bg-slate-800/30 p-8 rounded-lg border border-slate-800 backdrop-blur-sm"
    >
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
      />

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Nombre
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
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
            name="email"
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
          name="message"
          rows={4}
          className="bg-slate-900/50 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-teal-400 transition-colors resize-none"
          placeholder="Hola, me gustaría hablar sobre un proyecto..."
        ></textarea>
      </div>

      {status === "error" && errorMessage && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/50 rounded text-red-400 text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className={`w-full py-4 rounded font-medium transition-all flex justify-center items-center gap-2 ${
          status === "success"
            ? "bg-green-500/20 text-green-400 border border-green-500/50 cursor-default"
            : status === "error"
            ? "bg-teal-500 text-slate-900 hover:bg-teal-400 font-bold"
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
        {status === "error" && (
          <>
            Enviar Mensaje <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
};
