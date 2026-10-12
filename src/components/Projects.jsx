import { ArrowUpRight } from "lucide-react";
import { profile, projects } from "../data/content";
import { Card, Section, Tags } from "./ui";

export const Projects = () => (
  <Section id="projects" label="Projects">
    <p data-reveal className="mb-6 text-sm text-muted">
      Apps I design, build and ship on my own time.
    </p>
    <ul className="focus-list space-y-4">
      {projects.map((project) => (
        <li key={project.title}>
          <Card className="grid gap-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
            <img
              src={project.icon}
              alt=""
              width="64"
              height="64"
              loading="lazy"
              className="h-16 w-16 rounded-2xl border border-line"
            />
            <div>
              <h3 className="font-medium leading-snug transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                {project.platforms}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <p className="mt-3 text-sm text-fg/80">{project.highlights.join(" · ")}</p>
              <Tags items={project.stack} className="mt-4" />
              {project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                  {project.links.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      {label} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </li>
      ))}
    </ul>
    <a
      data-reveal
      href={profile.links.github}
      target="_blank"
      rel="noreferrer"
      className="group mt-8 inline-flex items-center gap-1 text-sm font-medium"
    >
      More on GitHub
      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  </Section>
);
