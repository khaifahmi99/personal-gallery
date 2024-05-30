import { Suspense } from "react";
import EatGrid from "./EatGrid";

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
        <h1 className="text-center text-2xl md:text-5xl">Eats</h1>
        <Suspense fallback={<p>Fetching Images...</p>}>
          <EatGrid currentPage={currentPage} />
        </Suspense>
      </div>
    </section>
  )
}