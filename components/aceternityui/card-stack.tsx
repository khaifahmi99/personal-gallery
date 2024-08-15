"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

let interval: any;

type Card = {
  id: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 2;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const startFlipping = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
  };

  return (
    <div className="">
      <div className="relative h-full min-h-[520px] w-full">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute bg-transparent h-full min-h-80 w-full rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              }}
            >
              <div className="font-normal text-neutral-700 dark:text-neutral-200">
                {card.content}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="w-full flex justify-center pt-4">
        <ChevronDown className="h-6 w-6 cursor-pointer" onClick={startFlipping} />
      </div>
    </div>

  );
};
