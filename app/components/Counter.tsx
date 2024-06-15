'use client';

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export type CounterProps = {
  items: {
    name: string;
    count: number;
  }[]
}

function formatNumberLocale(num: number) {
  return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function Counter({ items }: CounterProps) {
  return (
      <div className="mt-24 py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-transparent">
              <AnimatedCounter to={item.count} />
              <p className="text-zinc-400">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

function AnimatedCounter({ to }: { to: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return formatNumberLocale(latest);
  });

  const ref = useRef(null);
  const inView = useInView(ref);

  // while in view animate the count
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2 });


    }
  }, [count, inView, to]);

  return <motion.span ref={ref} className="text-5xl font-bold">{rounded}</motion.span>;
}