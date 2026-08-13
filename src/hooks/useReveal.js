import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to all [data-reveal] descendants
 * of the returned ref, adding the "in-view" class once each enters
 * the viewport (animation only ever plays once).
 */
export function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.hasAttribute("data-reveal")
      ? [root, ...root.querySelectorAll("[data-reveal]")]
      : [...root.querySelectorAll("[data-reveal]")];

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
