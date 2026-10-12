import { useRef } from "react";
import { experience } from "../data/content";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { Section, Tags } from "./ui";

export const Experience = () => {
  const listRef = useRef(null);
  const progress = useScrollProgress(listRef);

  return (
    <Section id="experience" label="Experience">
      <ol ref={listRef} className="focus-list relative space-y-10 pl-8">
        <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-line" />
        <span
          aria-hidden="true"
          className="absolute left-[5px] top-2 w-px origin-top bg-gradient-to-b from-accent/0 via-accent to-accent"
          style={{ height: "calc(100% - 1rem)", transform: `scaleY(${progress})` }}
        />
        {experience.map((job, i) => {
          const reached = progress > (i === 0 ? 0 : i / experience.length);
          return (
            <li key={job.company} data-reveal className="group relative">
              <span
                aria-hidden="true"
                className={`absolute -left-8 top-1 h-[11px] w-[11px] rounded-full border-2 transition-colors duration-500 ${
                  reached ? "border-accent bg-accent" : "border-line bg-bg"
                }`}
              />
              <p className="font-mono text-xs uppercase tracking-wider text-muted">{job.period}</p>
              <h3 className="mt-2 font-medium leading-snug">
                {job.role} <span className="text-muted">·</span>{" "}
                <span className="transition-colors group-hover:text-accent">{job.company}</span>
              </h3>
              <p className="mt-1 text-sm text-muted">
                {job.note} · {job.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{job.description}</p>
              <Tags items={job.stack} className="mt-4" />
            </li>
          );
        })}
      </ol>
    </Section>
  );
};
