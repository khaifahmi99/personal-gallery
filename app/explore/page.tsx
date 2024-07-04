import { Suspense } from "react";

import { Data } from "../_data";
import { MapView } from "./map-view";
import SparklesText from "@/components/magicui/sparkles-text";

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
      <div className="mx-auto container pb-16">
        <SparklesText 
          className='text-center text-2xl md:5xl uppercase' 
          text='Explore' 
          colors={{ first: '#4ade80', second: '#a78bfa',}}
        />
        <Suspense fallback={<p>Generating Map...</p>}>
          <MapView items={items} />
        </Suspense>
      </div>
    </section>
  )
}