import { Suspense } from "react";
import TravelCollectionGrid from "./TravelCollectionGrid";
import SparklesText from "@/components/magicui/sparkles-text";

interface Props {
  searchParams?: {
    page?: string;
  };
}

export default function Eats({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <section className="min-h-screen pt-48 w-full">
      <div className="mx-auto container">
        <SparklesText 
          className='text-center text-2xl md:5xl uppercase' 
          text='Travels' 
          colors={{ first: '#4ade80', second: '#a78bfa',}}
        />
      </div>
      <Suspense fallback={<p>Fetching Images...</p>}>
        <TravelCollectionGrid currentPage={currentPage} />
      </Suspense>
    </section>
  )
}