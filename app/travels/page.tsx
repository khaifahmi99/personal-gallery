import { Suspense } from "react";
import TravelCollectionGrid from "./TravelCollectionGrid";
import { LampTitle } from "@/components/aceternityui/lamp";

interface Props {
  searchParams?: {
    page?: string;
  };
}

export default function Eats({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <section className="min-h-screen pt-48 w-full">
      <LampTitle>
      <h1 
          className="bg-gradient-to-br from-slate-50 to-slate-200 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Travels
        </h1>      
      </LampTitle>
      <div className="lg:-translate-y-36 translate-0"> 
      <Suspense fallback={<p>Fetching Images...</p>}>
        <TravelCollectionGrid currentPage={currentPage} />
      </Suspense>
      </div>
    </section>
  )
}