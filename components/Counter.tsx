'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  value: number;         // final value jaise 75, 4000
  duration?: number;     // kitne seconds mein count ho (default 2)
  suffix?: string;       // jaise "%", "+"
}

const Counter = ({ value, duration = 2, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration * 60); // 60 fps

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [value, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration * 0.5 }}
      className="text-6xl font-light text-indigo-600"
    >
      {count}{suffix}
    </motion.span>
  );
};

export default Counter;
