import { Suspense } from "react";
import TravelGrid from "./TravelGrid";

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
        <h1 className="text-center text-2xl md:text-5xl uppercase">Travels</h1>
        <Suspense fallback={<p>Fetching Images...</p>}>
          <TravelGrid currentPage={currentPage} />
        </Suspense>
      </div>
    </section>
  )
}