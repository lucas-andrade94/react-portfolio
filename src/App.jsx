import { useEffect, useState } from "react";
import { Command } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CommandPalette } from "./components/CommandPalette";
import { useActiveSection } from "./hooks/useActiveSection";
import { usePageEffects } from "./hooks/usePageEffects";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useTheme } from "./hooks/useTheme";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Selected work" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const sectionIds = sections.map(({ id }) => id);

function App() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(sectionIds);
  const progress = useScrollProgress();
  const [paletteOpen, setPaletteOpen] = useState(false);
  usePageEffects();

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div aria-hidden="true" className="spotlight pointer-events-none fixed inset-0 z-0 hidden lg:block" />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 md:px-12 lg:flex lg:justify-between lg:gap-8 lg:px-16">
        <Sidebar
          sections={sections}
          active={active}
          theme={theme}
          onToggleTheme={toggle}
          onOpenPalette={() => setPaletteOpen(true)}
        />
        <main className="space-y-20 pb-24 pt-20 lg:w-[52%] lg:space-y-28 lg:py-24">
          <About />
          <Work />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>

      <button
        onClick={() => setPaletteOpen(true)}
        aria-label="Open menu"
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full border border-line bg-surface/90 px-4 py-3 text-sm font-medium shadow-lg shadow-black/20 backdrop-blur lg:hidden"
      >
        <Command size={16} className="text-accent" /> Menu
      </button>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        sections={sections}
        theme={theme}
        onToggleTheme={toggle}
      />
    </>
  );
}

export default App;
