import { Suspense } from "react";

import { Data } from "../_data";
import { MapView } from "./map-view";

export default async function Explore() {
  const { foods: eats } = await Data.query.getFoods({ fetchAll: true });
  const foodPlaces = eats
    .filter(eat => eat.coordinates !== undefined)
    .map(food => ({
      name: food.restaurantName ?? 'Unknown',
      coordinates: food.coordinates as [number, number],
      type: 'food' as ('travel' | 'food'),
      metadata: food,
    }));

  const { travels } = await Data.query.getTravels({ fetchAll: true });
  const travelPlaces = travels
    .map(travel => ({
      name: travel.title,
      coordinates: travel.coordinates,
      type: 'travel' as ('travel' | 'food'),
      link: `/travels/${travel.id}`,
      metadata: travel
    }));

  const items = [...foodPlaces, ...travelPlaces];

  return (
    <section className="min-h-screen pt-48 w-full">
      <h1
        className="bg-gradient-to-br from-slate-50 to-slate-200 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Explore
      </h1>
      <div className="">
        <Suspense fallback={<p>Generating Map...</p>}>
          <MapView items={items} />
        </Suspense>
      </div>
    </section>
  )
}