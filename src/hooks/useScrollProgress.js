import { useEffect, useState } from "react";

// Progress (0-1) of the page, or of `ref`'s element as it passes the viewport centre.
export const useScrollProgress = (ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (ref) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centre = window.innerHeight / 2;
        setProgress(Math.min(1, Math.max(0, (centre - rect.top) / rect.height)));
      } else {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
};
