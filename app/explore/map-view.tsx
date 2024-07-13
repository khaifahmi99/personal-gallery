'use client';

import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { CiLink } from 'react-icons/ci';
import { Travel } from '../_types/travel';
import { Food } from '../_types/food';
import Image from 'next/image';

interface Item {
  name: string;
  coordinates: [number, number];
  link?: string;
  type: 'travel' | 'food';
  metadata: Food | Travel;
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
      <div className={`w-6 h-6 rounded-full border-2 border-white bg-white flex items-center justify-center`}>
        <span className='text-xs'>{item.type === 'food' ? '🍕' : '✈️'}</span>
      </div>
    </Marker>,
  ), [items]);

  let showcaseBody = <></>;
  if (popupInfo?.type === 'food') {
    showcaseBody = showcaseFood(popupInfo.metadata as Food);
  } else if (popupInfo?.type === 'travel') {
    showcaseBody = showcaseTravel(popupInfo.metadata as Travel, popupInfo.link);
  }

  return (
    <div className="mt-16 container mx-auto px-2">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        <div className='hidden lg:flex flex-col bg-white rounded-lg'>
          <div className='flex flex-col gap-4 p-4 text-zinc-800 h-full rounded-lg'>
            <div className='text-xl font-bold'>Information</div>
            {popupInfo 
              ? (<div className='grow'>{showcaseBody}</div>) 
              : <div className='text-zinc-500'>Please click on a pin on the map to see details</div>}
          </div>
        </div>        
        <Map
          reuseMaps
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ''}
          initialViewState={{
            latitude: -37.81,
            longitude: 144.96,
            zoom: 11,
          }}
          style={{ height: 600, borderRadius: 8 }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
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
              closeButton={false}
            >
              <div className='flex flex-row gap-2 text-zinc-900'>
                <span>{popupInfo.name}</span>
                {popupInfo.link && <Link className='text-emerald-600' href={popupInfo.link}><CiLink size={16} /></Link>}
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  )
}

const showcaseFood = (food: Food) => {
  const { 
    restaurantName, city, country, 
    description,
    createdAt, cuisine,
  } = food;

  const thumbnail = food.images[0];

  return (
    <div className='flex flex-col gap-2 text-zinc-900 h-full'>
      <div className='relative h-80'>
        {/* TODO: show spinner while loading image or when switching image */}
        <Image
          alt={restaurantName ?? food.id}
          src={thumbnail}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='flex flex-row justify-between items-center pt-4'>
        <div className='text-xl font-bold'>{restaurantName ?? 'Unnamed Restaurant'}</div>
        {createdAt && (
          <div className='text-sm'>{new Date(createdAt).toLocaleDateString()}</div>
        )}
      </div>
      <div className='text-zinc-500'>{city}, {country}</div>
      <div className='flex flex-col grow'>
        <div className='text-sm grow'>
          {description}
        </div>
        <div className='text-xs flex flex-row-reverse gap-1'>{cuisine.map(c => (
          <div className='bg-emerald-200 opacity-75 px-2 py-1 rounded-xl'>
            {c}
          </div>
        ))}</div>
      </div>
    </div>
  )
}

const showcaseTravel = (travel: Travel, link?: string) => {
  const {
    title, location, country,
    cover, date
  } = travel;

  return (
    <div className='flex flex-col gap-2 text-zinc-900 h-full'>
      <div className='relative h-80'>
        {/* TODO: show spinner while loading image or when switching image */}
        <Image
          alt={title}
          src={cover}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='flex flex-row justify-between items-center pt-4'>
        <div className='flex flex-row gap-1'>
          <div className='text-xl font-bold'>{title}</div>
          {link && <Link className='text-emerald-600' href={link}><CiLink size={16} /></Link>}
        </div>      
        <div className='text-sm'>{new Date(date).toLocaleDateString()}</div>
      </div>
      <div className='text-zinc-500 grow'>{location}</div>
      <div className='flex flex-row-reverse'>
        <div className='bg-emerald-200 opacity-75 px-2 py-1 rounded-xl'>
          {country}
        </div>
      </div>
    </div>
  )
}