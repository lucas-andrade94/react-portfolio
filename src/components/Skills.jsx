import { Award, GraduationCap, Languages } from "lucide-react";
import { certifications, education, languages, skills } from "../data/content";
import { Section } from "./ui";

export const Skills = () => (
  <Section id="skills" label="Skills">
    <dl data-reveal className="space-y-5">
      {skills.map(({ group, items }) => (
        <div key={group} className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
          <dt className="pt-0.5 font-mono text-xs uppercase tracking-wider text-muted">{group}</dt>
          <dd className="text-sm leading-relaxed">{items.join(", ")}</dd>
        </div>
      ))}
    </dl>

    <div data-reveal className="mt-12 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-line p-5">
        <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
          <GraduationCap size={14} className="text-accent" /> Education
        </h3>
        <p className="mt-3 text-sm font-medium">{education.degree}</p>
        <p className="mt-1 text-sm text-muted">
          {education.school} · {education.period}
        </p>
        <h3 className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
          <Languages size={14} className="text-accent" /> Languages
        </h3>
        <p className="mt-3 text-sm text-muted">{languages.join(" · ")}</p>
      </div>
      <div className="rounded-xl border border-line p-5">
        <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
          <Award size={14} className="text-accent" /> Certifications
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);
