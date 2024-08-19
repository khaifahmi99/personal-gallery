'use client';

import { Gundam } from "@/app/_types/gundam";
import { CardStack } from "@/components/aceternityui/card-stack";
import { Card, MiniCard } from "./card";
import { useSearchParams } from "next/navigation";

type Props = {
  gundams: Gundam[];
}

export function Display({ gundams }: Props) {
  const searchParams = useSearchParams()
  const id = searchParams.get('id');

  const sortedGundams: Gundam[] = [];
  if (id) {
    const index = gundams.findIndex((gundam) => gundam.id === id);
    if (index !== -1) {
      sortedGundams.push(gundams[index]);
    }
  }
  sortedGundams.push(...gundams.filter((gundam) => gundam.id !== id));

  const cards = sortedGundams.map(gundam => ({
    id: gundam.id,
    content: (
      <Card gundam={gundam} />
    ),
  }));

  return (
    <>
      <div className="hidden lg:flex flex-col lg:-translate-y-36 translate-y-12  gap-4 max-w-7xl mx-auto">
        <CardStack
          items={cards}
        />
      </div>
      <div className="flex flex-col gap-4 py-12 container mx-auto">
        {gundams.map(g => (
          <div key={g.id} className="lg:hidden">
            <MiniCard gundam={g} />
          </div>
        ))}
      </div>
    </>
  )
}