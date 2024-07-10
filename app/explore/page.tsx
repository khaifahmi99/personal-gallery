import { Suspense } from "react";

import { Data } from "../_data";
import { MapView } from "./map-view";
import { LampTitle } from "@/components/aceternityui/lamp";

export default async function Explore() {
  const { foods: eats } = await Data.query.getFoods({ fetchAll: true });
  const foodPlaces = eats
  .filter(eat => eat.coordinates !== undefined)
  .map(({ restaurantName, coordinates }) => ({ name: restaurantName ?? 'Unknown', coordinates: coordinates as [number, number], type: 'food' as ('travel' | 'food') }));

  const { travels } = await Data.query.getTravels({ fetchAll: true });
  const travelPlaces = travels
    .map(({ title, coordinates, id }) => ({ name: title, coordinates, type: 'travel' as ('travel' | 'food'), link: `/travels/${id}` }));

  const items = [...foodPlaces, ...travelPlaces];

  return (
    <section className="min-h-screen pt-48 w-full">
      <LampTitle>
      <h1 
          className="bg-gradient-to-br from-slate-50 to-slate-200 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Explore
        </h1>      
      </LampTitle>
      <div className="lg:-translate-y-36 translate-0">  
        <Suspense fallback={<p>Generating Map...</p>}>
          <MapView items={items} />
        </Suspense>
      </div>
    </section>
  )
}