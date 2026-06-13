"use client";

import { useEffect, useRef } from "react";
import { createElement } from "react";
import type { ReactNode, CSSProperties, ElementType } from "react";

type AosAnimation = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur-up";

interface RevealProps {
  children: ReactNode;
  animation?: AosAnimation;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

/** Wraps a single element; fades/slides it in when it enters the viewport. */
export function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  style,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("aos-init", `aos-${animation}`);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("aos-animate"), delay);
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  animation?: AosAnimation;
  baseDelay?: number;
  stagger?: number;
  className?: string;
  threshold?: number;
  as?: ElementType;
}

/** Wraps a list container; each direct child animates in with a staggered delay. */
export function StaggerReveal({
  children,
  animation = "fade-up",
  baseDelay = 0,
  stagger = 90,
  className = "",
  threshold = 0.1,
  as: Tag = "div",
}: StaggerRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];
    items.forEach((el) => el.classList.add("aos-init", `aos-${animation}`));

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => el.classList.add("aos-animate"), baseDelay + i * stagger);
          });
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(container);
    return () => io.disconnect();
  }, [animation, baseDelay, stagger, threshold]);

  return createElement(Tag, { ref, className }, children);
}
