import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, AtSign, Copy, CornerDownLeft, Hash, Moon, Search, Sun } from "lucide-react";
import { profile } from "../data/content";
import { GitHubIcon, LinkedInIcon } from "./icons";

export const CommandPalette = ({ open, onClose, sections, theme, onToggleTheme }) => {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [notice, setNotice] = useState("");
  const inputRef = useRef(null);
  const restoreFocusRef = useRef(null);

  const commands = useMemo(
    () => [
      ...sections.map(({ id, label }) => ({
        group: "Navigate",
        label,
        Icon: Hash,
        run: () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      {
        group: "Actions",
        label: "Copy email address",
        Icon: Copy,
        keepOpen: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            setNotice("Email copied to clipboard");
          } catch {
            window.location.href = `mailto:${profile.email}`;
          }
        },
      },
      {
        group: "Actions",
        label: "Send an email",
        Icon: AtSign,
        run: () => (window.location.href = `mailto:${profile.email}`),
      },
      {
        group: "Actions",
        label: `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
        Icon: theme === "dark" ? Sun : Moon,
        run: onToggleTheme,
      },
      {
        group: "Links",
        label: "GitHub",
        Icon: GitHubIcon,
        run: () => window.open(profile.links.github, "_blank", "noopener"),
      },
      {
        group: "Links",
        label: "LinkedIn",
        Icon: LinkedInIcon,
        run: () => window.open(profile.links.linkedin, "_blank", "noopener"),
      },
    ],
    [sections, theme, onToggleTheme]
  );

  const results = commands.filter((c) =>
    c.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  useEffect(() => {
    if (!open) return;
    restoreFocusRef.current = document.activeElement;
    setQuery("");
    setIndex(0);
    setNotice("");
    requestAnimationFrame(() => inputRef.current?.focus());
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      restoreFocusRef.current?.focus?.();
    };
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  if (!open) return null;

  const execute = (command) => {
    if (!command) return;
    command.run();
    if (!command.keepOpen) onClose();
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIndex((i) => (i + 1) % Math.max(results.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setIndex((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      execute(results[index]);
    } else if (event.key === "Escape") {
      onClose();
    } else if (event.key === "Tab") {
      event.preventDefault();
    }
  };

  let lastGroup = null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onKeyDown={onKeyDown}
        className="blur-in relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/30"
        style={{ animationDuration: "0.25s" }}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search size={16} className="shrink-0 text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-list"
            aria-activedescendant={results[index] ? `command-${index}` : undefined}
            className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
            ESC
          </kbd>
        </div>

        <ul id="command-list" role="listbox" className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-8 text-center text-sm text-muted">No results.</li>
          )}
          {results.map((command, i) => {
            const showGroup = command.group !== lastGroup;
            lastGroup = command.group;
            const selected = i === index;
            return (
              <li key={command.label} role="presentation">
                {showGroup && (
                  <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {command.group}
                  </p>
                )}
                <div
                  id={`command-${i}`}
                  role="option"
                  aria-selected={selected}
                  onMouseMove={() => setIndex(i)}
                  onClick={() => execute(command)}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    selected ? "bg-accent-soft text-fg" : "text-muted"
                  }`}
                >
                  <command.Icon className={`h-4 w-4 ${selected ? "text-accent" : ""}`} />
                  <span className="flex-1">{command.label}</span>
                  {selected && <CornerDownLeft size={14} className="text-muted" />}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-line px-4 py-2.5 text-xs text-muted">
          <span aria-live="polite" className={notice ? "text-accent" : ""}>
            {notice || "↑↓ to navigate · ↵ to select"}
          </span>
          <span className="inline-flex items-center gap-1">
            {profile.name} <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};
