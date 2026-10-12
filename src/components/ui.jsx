export const Section = ({ id, label, children }) => (
  <section id={id} aria-label={label} className="scroll-mt-16 lg:scroll-mt-24">
    <h2 className="sticky top-0 z-20 -mx-6 mb-6 bg-bg/80 px-6 py-5 font-mono text-xs uppercase tracking-[0.2em] text-fg backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:p-0 lg:text-muted lg:backdrop-blur-none">
      {label}
    </h2>
    {children}
  </section>
);

export const Tags = ({ items, className = "" }) =>
  items.length > 0 && (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Technologies">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] leading-none text-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );

export const Card = ({ children, className = "" }) => (
  <div
    data-reveal
    className={`group relative rounded-xl border border-transparent p-5 transition-colors hover:border-line hover:bg-surface -mx-5 ${className}`}
  >
    {children}
  </div>
);
