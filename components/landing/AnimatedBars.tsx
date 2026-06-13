"use client";

import { useEffect, useRef, useState } from "react";

/** Bar chart bars that grow from 0 when they enter the viewport. */
export function AnimatedBars({
  data,
  activeIndex = 5,
}: {
  data: number[];
  activeIndex?: number;
}) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-end gap-1.5 h-14">
      {data.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t"
          style={{
            height: triggered ? `${h}%` : "4%",
            transition: `height ${500 + i * 60}ms cubic-bezier(0.16,1,0.3,1) ${i * 55}ms`,
            backgroundColor: i === activeIndex ? "#53B04B" : "#0B4C4A",
            opacity: i === activeIndex ? 1 : 0.18 + i * 0.1,
          }}
        />
      ))}
    </div>
  );
}
