"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Globe, Github, VideoIcon } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl bg-white dark:bg-neutral-900 shadow-md overflow-hidden border border-gray-200 dark:border-neutral-800 transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "opacity-70 scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        {card.period && (
          <p className="text-sm text-muted-foreground">{card.period}</p>
        )}
        {card.description && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {card.description}
          </p>
        )}

        {card.stack && (
          <div className="flex flex-wrap gap-2 mt-2">
            {card.stack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {card.buttons && (
          <div className="flex gap-2 mt-3">
            {card.buttons.map((btn, idx) => {
              const isWebsite = btn.label.toLowerCase().includes("website");
              const Icon = isWebsite
                ? Globe
                : btn.label.toLowerCase().includes("demo")
                ? VideoIcon
                : Github;
              return (
                <a
                  key={idx}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-black dark:bg-white hover:opacity-90 transition-colors"
                >
                  <Icon className="w-4 h-4 text-white dark:text-black" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  period?: string;
  description?: string;
  stack?: string[];
  buttons?: { label: string; url: string }[];
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
