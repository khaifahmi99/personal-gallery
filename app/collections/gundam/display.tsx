'use client';

import { Gundam } from "@/app/_types/gundam";
import { CardStack } from "@/components/aceternityui/card-stack";
import { Card } from "./card";
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
    <div className="lg:-translate-y-36 translate-0 flex flex-col gap-4 max-w-7xl mx-auto">
      <CardStack
        items={cards}
      />
    </div>

  )
}