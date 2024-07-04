import { Suspense } from "react";
import EatGrid from "./EatGrid";
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
          text='Eats' 
          colors={{ first: '#4ade80', second: '#a78bfa',}}
        />
      </div>
      <Suspense fallback={<p>Fetching Images...</p>}>
        <EatGrid currentPage={currentPage} />
      </Suspense>
    </section>
  )
}