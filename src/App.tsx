import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  Terminal,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { SkillCard } from "./components/SkillCard";
import { ContactForm } from "./components/ContactFrom";
import { SocialLink } from "./components/SocialLink";
import { SKILLS } from "./utils/constants";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50 py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div
            className="text-xl font-bold tracking-tight text-slate-100 flex items-center gap-2"
            onClick={() => scrollToSection("hero")}
          >
            <Terminal size={20} className="text-teal-400" />
            <span>
              Dev<span className="text-teal-400">Portfolio</span>.
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-teal-400 transition-colors"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-teal-400 transition-colors"
            >
              Stack
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-teal-400 transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 hover:text-teal-400"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left py-2 hover:text-teal-400"
            >
              Stack
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 hover:text-teal-400"
            >
              Contacto
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <div className="max-w-5xl mx-auto w-full">
          <p className="text-teal-400 font-medium mb-4 tracking-wide">
            HOLA, MI NOMBRE ES
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            Zantica.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-400 mb-8 tracking-tight">
            Software Engineer | Fullstack & Accessibility Specialist
          </h2>
          <p className="max-w-xl text-lg text-slate-400 mb-10 leading-relaxed">
            Transformo ideas complejas en productos{" "}
            <span className="text-teal-400 font-semibold">
              simples y mantenibles
            </span>
            . Experto en el ecosistema TypeScript, utilizo metodologías como TDD y
            Arquitectura Hexagonal para construir sistemas que perduran.
            <br /><br />
            Siempre en beta constante, explorando la integración de IA y los fundamentos del desarrollo de juegos en Godot.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="/cv.pdf"
              download="santiago-carrizo-developer.pdf"
              className="group flex items-center gap-2 px-6 py-3 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded hover:bg-teal-500/20 transition-all active:scale-95"
            >
              <FileText size={18} />
              <span>Descargar CV</span>
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-300 border border-slate-700 rounded hover:bg-slate-700 transition-all active:scale-95"
            >
              <Mail size={18} />
              <span>Contáctame</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <SocialLink
              href="https://github.com/zantica"
              icon={<Github size={22} />}
              label="GitHub"
            />
            <SocialLink
              href="https://es.linkedin.com/in/santiago-carrizo"
              icon={<Linkedin size={22} />}
              label="LinkedIn"
            />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 cursor-pointer">
          <ChevronDown size={24} onClick={() => scrollToSection("about")} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-teal-400 text-xl font-mono">01.</span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
              Sobre mí
            </h3>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 text-slate-400 leading-relaxed">
              <p>
                Apasionado por crear tecnología que no solo funcione, sino que sea accesible para todos. Como desarrollador Fullstack, disfruto resolviendo problemas complejos en todo el stack tecnológico, priorizando siempre un diseño limpio y una experiencia de usuario fluida.
              </p>
              <p>
                Mi experiencia profesional abarca diversos entornos, lo que me ha permitido desarrollar una visión integral del ciclo de vida de un producto. Fuera del código, contribuyo activamente al ecosistema tecnológico moderando comunidades y explorando nuevas herramientas en el open source. Entusiasta de los videojuegos y del aprendizaje continuo.
              </p>
            </div>

            {/* Simple Stats or Image Placeholder */}
            <div className="relative group">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-teal-400 rounded transition-transform duration-300 group-hover:top-2 group-hover:left-2"></div>
              <div className="relative bg-slate-800 rounded w-full aspect-square flex flex-col items-center justify-center p-6 text-center shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <Code2 size={48} className="text-teal-400 mb-4" />
                <span className="text-4xl font-bold text-slate-100 mb-1">
                  4+
                </span>
                <span className="text-sm text-slate-400">Años de Exp.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills/Stack Mini Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-teal-400 text-xl font-mono">02.</span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
              Mi Stack Tecnológico
            </h3>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill) => (
              <SkillCard key={skill} cardName={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal-400 font-mono mb-4">03. ¿Qué sigue?</p>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Contáctame
          </h3>
          <p className="text-slate-400 text-lg mb-12">
            Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas
            una pregunta o simplemente quieras saludar, haré todo lo posible
            para responderte.
          </p>

          <ContactForm />

          <div className="mt-20 pt-10 border-t border-slate-800 flex justify-center gap-8">
            <a
              href="https://github.com/zantica"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              <Github />
            </a>
            <a
              href="https://es.linkedin.com/in/santiago-carrizo"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              <Linkedin />
            </a>
            {/* <a href="https://discord.com" className="text-slate-400 hover:text-teal-400 transition-colors"><Disc /></a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm font-mono">
        <p>Diseñado y Construido por Tu Nombre</p>
        <p className="mt-2">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}
