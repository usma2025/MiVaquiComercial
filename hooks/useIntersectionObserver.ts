"use client";

import { useEffect, useRef } from "react";

export function useIntersectionObserver(
  className = "visible",
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add(className);
        observer.disconnect();
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [className, options]);

  return ref;
}
