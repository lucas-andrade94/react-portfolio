import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { profile } from "../data/content";

const formatTime = () =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: profile.timeZone,
    timeZoneName: "short",
  }).format(new Date());

export const Footer = () => {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="mt-1 flex items-center gap-2 font-mono text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Calgary · {time}
        </p>
      </div>
      <a
        href="#"
        className="group inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 transition hover:border-accent hover:text-accent sm:self-auto"
      >
        Back to top
        <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
      </a>
    </footer>
  );
};
