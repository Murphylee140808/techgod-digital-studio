import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(value);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!inView || !mounted) return;
    setN(0);
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, value, duration, mounted]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(n).toLocaleString()}
      {suffix}
    </span>
  );
}
