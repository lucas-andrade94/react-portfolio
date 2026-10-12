import { about, stats } from "../data/content";
import { NumberTicker } from "./NumberTicker";
import { Section } from "./ui";

export const About = () => (
  <Section id="about" label="About">
    <div data-reveal className="space-y-4 leading-relaxed text-muted">
      {about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
    <dl data-reveal className="mt-10 grid grid-cols-3 divide-x divide-line rounded-xl border border-line">
      {stats.map(({ value, label }) => (
        <div key={label} className="px-4 py-5 sm:px-6">
          <dt className="sr-only">{label}</dt>
          <dd className="text-3xl font-semibold tracking-tight">
            <NumberTicker value={value} />
          </dd>
          <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{label}</dd>
        </div>
      ))}
    </dl>
  </Section>
);
