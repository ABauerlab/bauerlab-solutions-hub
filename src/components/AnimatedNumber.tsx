"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  className?: string;
}

const AnimatedNumber = ({ value, className }: AnimatedNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));

  const match = value.match(/^(\D*)(\d+)(\D*)$/);

  useEffect(() => {
    if (!isInView || !match) {
      if (!match) setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${prefix}${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [isInView, match, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default AnimatedNumber;
