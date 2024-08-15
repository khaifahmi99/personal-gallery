"use client";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/aceternityui/canvas-reveal-effect";
import { BotIcon, CoinsIcon, IceCreamIcon, PlaneIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

export function Categories() {
  return (
    <>
      <div className="py-8 flex flex-col lg:flex-row items-center justify-center w-full gap-12 mx-auto px-8">
        <Card title='Eats' icon={<IceCreamIcon className="w-16 h-16" />} url='/eats' colors={[
          [236, 72, 153],
          [232, 121, 249],
        ]} />
        <Card title='Travels' icon={<PlaneIcon className="w-16 h-16" />} url='/travels' />
        <Card title='Gundam' icon={<BotIcon className="w-16 h-16" />} url='/collections/gundam' colors={[
          [0, 0, 205],
          [100, 100, 255],
        ]} />
        {/* <Card title='Coins' icon={<CoinsIcon className="w-16 h-16" />} url='/collections/coins' /> */}
      </div>
    </>
  );
}

const Card = ({ title, url, icon, colors }: { title: string; url: string; icon: React.ReactNode; colors?: [number, number, number][] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={url} className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] bg-slate-900/50 w-60 p-4 relative h-60 relative">
      <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              dotSize={2}
              colors={colors}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl text-center relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card-2:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </Link>
  );
};