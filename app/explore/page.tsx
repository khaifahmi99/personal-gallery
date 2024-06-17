import { Suspense } from "react";

import { Data } from "../_data";
import { MapView } from "./map-view";

export default async function Explore() {
  const { foods: eats } = await Data.query.getFoods({ fetchAll: true });
  const foodPlaces = eats
  .filter(eat => eat.coordinates !== undefined)
  .map(({ restaurantName, coordinates }) => ({ name: restaurantName ?? 'Unknown', coordinates: coordinates as [number, number], type: 'food' as ('travel' | 'food') }));

  const { travels } = await Data.query.getTravels({ fetchAll: true });
  const travelPlaces = travels
    .map(({ title, coordinates }) => ({ name: title, coordinates, type: 'travel' as ('travel' | 'food') }));

  const items = [...foodPlaces, ...travelPlaces];

  return (
    <section className="min-h-screen pt-48 w-full">
      <div className="mx-auto container">
        <h1 className="text-center text-2xl md:text-5xl uppercase">Explore</h1>
        <Suspense fallback={<p>Generating Map...</p>}>
          <MapView items={items} />
        </Suspense>
      </div>
    </section>
  )
}