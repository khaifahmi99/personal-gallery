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
      <h1
        className="bg-gradient-to-br from-slate-50 to-slate-200 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Eats
      </h1>
      <div className="">
        <Suspense fallback={<p>Fetching Images...</p>}>
          <EatGrid currentPage={currentPage} />
        </Suspense>
      </div>
    </section>
  )
}