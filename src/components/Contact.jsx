import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "../data/content";
import { Section } from "./ui";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" label="Contact">
      <div data-reveal className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <h3 className="text-2xl font-semibold tracking-tight">Let's talk.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted">
          Open to conversations about engineering roles, integrations work or product ideas. The
          fastest way to reach me is email.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
          >
            {profile.email}
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-muted transition hover:border-accent hover:text-accent"
          >
            {copied ? <Check size={14} className="pop text-accent" /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </Section>
  );
};
