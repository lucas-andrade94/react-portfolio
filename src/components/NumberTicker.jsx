import { useEffect, useRef, useState } from "react";

// Counts up to the numeric part of `value` ("4+" -> 0..4, then "4+") once visible.
export const NumberTicker = ({ value, duration = 1200 }) => {
  const ref = useRef(null);
  const target = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(target);
      return;
    }
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        setCurrent(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {Number.isNaN(target) ? value : `${current}${current === target ? suffix : ""}`}
    </span>
  );
};
