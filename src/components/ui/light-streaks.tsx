"use client";
import { type CSSProperties, type ReactElement, useEffect, useState } from "react";
import { motion as Motion } from "motion/react";

import { cn } from "@/lib/utils";

interface Star {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  size: number;
  rotation: number;
  lifespan: number;
  opacity: number;
}

interface FlashingTextProps {
  as?: ReactElement;
  className?: string;
  text: string;
  flashesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
  flashLength?: number; // Ukuran bintang, default 10-30px
}

export const FlashingText: React.FC<FlashingTextProps> = ({
  text,
  colors = { first: "#0160D0", second: "#FAFF22" },
  className,
  flashesCount = 1,
  flashLength = 1,

  ...props
}) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStar = (): Star => {
      const x = `${Math.random() * 100}%`;
      const y = `${Math.random() * 10}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 9;
      const size = Math.random() * flashLength;
      const rotation = Math.random() * 360;
      const lifespan = Math.random() * 30 + 20;
      const opacity = Math.random() * 0.5 + 0.5;
      const id = `${x}-${y}-${Date.now()}-${Math.random()}`;
      return { id, x, y, color, delay, size, rotation, lifespan, opacity };
    };

    const initializeStars = () => {
      const newStars = Array.from({ length: flashesCount }, generateStar);
      setStars(newStars);
    };

    const updateStars = () => {
      setStars((currentStars) =>
        currentStars.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar();
          } else {
            return { ...star, lifespan: star.lifespan - 0.1 };
          }
        }),
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 500);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, flashesCount, flashLength]);

  return (
    <div
      className={cn("text-6xl font-bold relative", className)}
      {...props}
      style={
        {
          "--flashes-first-color": `${colors.first}`,
          "--flashes-second-color": `${colors.second}`,
        } as CSSProperties
      }
    >
      <span className="relative inline-block">
        {stars.map((star) => (
          <StarShape key={star.id} {...star} />
        ))}
        {text}
      </span>
    </div>
  );
};

const StarShape: React.FC<Star> = ({ id, x, y, color, delay, size, rotation, opacity }) => {
  return (
    <Motion.div
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{
        opacity: 0,
        left: x,
        rotate: rotation,
        scale: 0.3,
      }}
      animate={{
        opacity: [0, opacity, 0],
        scale: [0.3, 1, 0.3],
        rotate: [rotation, rotation + 45],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `calc(${y} - 20px)`,
      }}
    >
      <svg viewBox="0 0 24 24" width="100%" height="100%" style={{ filter: `drop-shadow(0 0 4px ${color})` }}>
        <path d="M12 0 L14.59 8.41 L23 8.41 L16.2 13.6 L18.8 22 L12 16.8 L5.2 22 L7.8 13.6 L1 8.41 L9.41 8.41 Z" fill={color} />
      </svg>
    </Motion.div>
  );
};
