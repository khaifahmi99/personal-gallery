import { Suspense } from "react";
import PhotoGrid from "./PhotoGrid";

export default function Eats({searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <section className="min-h-screen pt-48 w-full">
      <div className="mx-auto container">
        <h1 className="text-center text-2xl md:text-5xl">Eats</h1>
        <Suspense fallback={<p>Fetching Images...</p>}>
          <PhotoGrid currentPage={currentPage} />
        </Suspense>
      </div>
    </section>
  )
}