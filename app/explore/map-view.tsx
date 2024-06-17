'use client';

import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { CiLink } from 'react-icons/ci';

interface Item {
  name: string;
  coordinates: [number, number];
  link?: string;
  type: 'travel' | 'food'
}

type Props = {
  items: Item[];
};

export const MapView = ({ items }: Props) => {
  const [popupInfo, setPopupInfo] = useState<Item | null>(null);

  const markers = useMemo(() => items.map((item, idx) => 
    <Marker 
      key={idx}
      latitude={item.coordinates[0]} 
      longitude={item.coordinates[1]} 
      anchor="top"
      onClick={e => {
        // If we let the click event propagates to the map, it will immediately close the popup
        // with `closeOnClick: true`
        e.originalEvent.stopPropagation();
        setPopupInfo(item);
      }}
    >
      <div className={`w-4 h-4 rounded-full border-2 border-white ${item.type === 'food' ? 'bg-blue-600' : 'bg-green-600'}`}>
        <span className='invisible'>content</span>
      </div>
    </Marker>,
  ), [items]);

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
        <NavigationControl />
        {...markers}  
        {popupInfo && (
          <Popup
            anchor="bottom"
            latitude={popupInfo.coordinates[0]}
            longitude={popupInfo.coordinates[1]}
            onClose={() => setPopupInfo(null)}
            offset={5}
          >
            <div className='flex flex-row gap-2 text-zinc-900'>
              <span>{popupInfo.name}</span>
              {popupInfo.link && <Link className='text-emerald-600' href={popupInfo.link}><CiLink size={16} /></Link>}
            </div>
          </Popup>
        )}
      </Map>
    </div>
  )
}