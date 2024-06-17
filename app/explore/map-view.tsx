'use client';

import Map, { AnyLayer, Layer, Marker, NavigationControl, Source } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo } from 'react';


type Props = {
  items: {
    name: string;
    coordinates: [number, number];
    link?: string;
    type: 'travel' | 'food'
  }[];
};

export const MapView = ({ items }: Props) => {
  const markers = useMemo(() => items.map((item, idx) => 
    <Marker 
      key={idx}
      latitude={item.coordinates[0]} 
      longitude={item.coordinates[1]} 
      color={item.type === 'food' ? 'green' : 'blue'} 
    />,
  ), [items]);

  markers.push(...[
    <Marker key='example-1' latitude={-37.81} longitude={144.96} color='blue' />,
    <Marker key='example-2' latitude={-37.81} longitude={144.94} color='green' />,
  ])

  return (
    <div className="mt-16">
      <Map
        reuseMaps
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ''}
        initialViewState={{
          latitude: -37.81,
          longitude: 144.96,
          zoom: 11,
        }}
        style={{ height: 600 }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      >
        {...markers}  
        <NavigationControl />
      </Map>
    </div>
  )
}