import { Command, Mail, MapPin, Moon, Sun } from "lucide-react";
import { profile } from "../data/content";
import { GitHubIcon, LinkedInIcon } from "./icons";

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export const Sidebar = ({ sections, active, theme, onToggleTheme, onOpenPalette }) => (
  <header className="pt-16 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
    <div>
      <div className="flex items-start justify-between gap-4">
        <h1 className="blur-in text-4xl font-semibold tracking-tight sm:text-5xl">
          <a href="#">{profile.name}</a>
        </h1>
        <div className="blur-in mt-1 flex items-center gap-2" style={{ "--i": 4 }}>
          <button
            onClick={onOpenPalette}
            aria-label="Open command menu"
            aria-keyshortcuts="Meta+K Control+K"
            className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition hover:border-accent hover:text-accent sm:inline-flex"
          >
            <Command size={12} />K
          </button>
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="rounded-full border border-line p-2 text-muted transition hover:border-accent hover:text-accent"
          >
            <span key={theme} className="pop block">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </span>
          </button>
        </div>
      </div>
      <p className="blur-in mt-3 text-lg font-medium sm:text-xl" style={{ "--i": 1 }}>{profile.title}</p>
      <p className="blur-in mt-4 max-w-sm leading-relaxed text-muted" style={{ "--i": 2 }}>{profile.tagline}</p>
      <p className="blur-in mt-4 flex items-center gap-1.5 text-sm text-muted" style={{ "--i": 3 }}>
        <MapPin size={14} className="text-accent" /> {profile.location}
      </p>

      <nav aria-label="Sections" className="blur-in mt-16 hidden lg:block" style={{ "--i": 5 }}>
        <ul className="space-y-1">
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center gap-4 py-2.5"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      isActive
                        ? "w-16 bg-fg"
                        : "w-8 bg-muted/60 group-hover:w-16 group-hover:bg-fg"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                      isActive ? "text-fg" : "text-muted group-hover:text-fg"
                    }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>

    <ul className="blur-in mt-8 flex items-center gap-5" style={{ "--i": 6 }} aria-label="Social links">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="block text-muted transition hover:-translate-y-0.5 hover:text-fg"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  </header>
);
