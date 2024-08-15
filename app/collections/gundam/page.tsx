import { getGundams } from "@/app/_data/gundam"
import { LampTitle } from "@/components/aceternityui/lamp";
import { Display } from "./display";
import { Suspense } from "react";

export default async function Gundam() {
  const gundams = await getGundams();

  return (
    <section className="min-h-screen pt-48 w-full">
      <LampTitle>
        <h1
          className="bg-gradient-to-br from-slate-50 to-slate-200 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Gundam Collection
        </h1>
      </LampTitle>
      <Suspense fallback={<p>Fetching Images...</p>}>
        <Display gundams={gundams} />
      </Suspense>
    </section>
  )
}