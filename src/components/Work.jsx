import { work } from "../data/content";
import { Card, Section, Tags } from "./ui";

export const Work = () => (
  <Section id="work" label="Selected work">
    <p data-reveal className="mb-6 text-sm text-muted">
      Highlights from my work at Bloks.
    </p>
    <ol className="focus-list space-y-4">
      {work.map((item, i) => (
        <li key={item.title}>
          <Card className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
            <p className="pt-0.5 font-mono text-xs text-muted">
              {String(i + 1).padStart(2, "0")}
            </p>
            <div>
              <h3 className="font-medium leading-snug transition-colors group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              <Tags items={item.stack} className="mt-4" />
            </div>
          </Card>
        </li>
      ))}
    </ol>
  </Section>
);
