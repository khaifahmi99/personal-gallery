'use client'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const PAGE_SIZE = 9;

async function getData({ pageNumber }: { pageNumber: number }): Promise<[Food[], number]> {
  const res = await fetch('https://raw.githubusercontent.com/khaifahmi99/art-canvas-blog/main/public/assets/food/main.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json();
  const totalPage = Math.ceil(data.foods.length / PAGE_SIZE);

  const startIndex = (pageNumber - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const rawFoods: RawFood[] = data.foods.reverse().slice(startIndex, endIndex);

  const foodRecords = rawFoods.map((rawFood, i) => ({
    id: `${i}`,
    images: [`https://d3ae3kedxtitrj.cloudfront.net/food/${rawFood['Images'][0]}`],
    cuisine: rawFood['Cuisine'],
    description: rawFood['Description'],
    city: rawFood['Restaurant City'],
    country: rawFood['Restaurant Country'],

    restaurantName: rawFood['Restaurant Name'] ?? undefined,

    capturedOn: rawFood['Captured on'],
    createdAt: rawFood['Date'] ?? undefined,
  }));

  return [foodRecords, totalPage];
}

interface Props {
  currentPage: number;
}

export default async function PhotoGrid({ currentPage }: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();

  const data = await getData({ pageNumber: currentPage });
  const records = data[0];
  const totalPages = data[1];

  const onNextPage = (currentPage: number) => {
    const nextPage = currentPage + 1;
    replace(`${pathname}?page=${nextPage}`);
  }

  const onPreviousPage = (currentPage: number) => {
    const previousPage = currentPage - 1;
    replace(`${pathname}?page=${previousPage}`);
  }

  return (
    <div className="flex flex-col gap-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {records.map((food, i) => (
          <div key={i} className="relative">
            <Image
              src={food.images[0]}
              width={512}
              height={1024}
              alt={`Image ${i + 1}`}
              className="hover:brightness-50"
            />
            <div className='absolute top-2 right-2 bg-opacity-50 bg-indigo-700 rounded-lg px-2 text-white cursor-default pointer-events-none'>
              📸 {food.capturedOn}
            </div>
            <div className='main-section absolute bottom-0 inset-x-0 text-white pointer-events-none'>
              <div className='p-2 truncate'>
                <div className='main-header pb-4'>
                  <div className='text-lg font-bold'>
                      {food.restaurantName ? `📍 ${food.restaurantName}` : '🏪🧑‍🍳'}
                  </div>
                  <div className='italic'>
                    {food.city}, {food.country}
                  </div>
                </div>
                <div className='text-wrap'>
                  {food.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 w-full text-emerald-400 text-5xl">
        <div 
          onClick={() => {
            if (currentPage === 1) {
              return;
            }

            onPreviousPage(currentPage);
          }}
          className={currentPage === 1 ? 'opacity-25' : 'opacity-75 hover:opacity-100 cursor-pointer'}>{'<--'}</div>
        <div 
          onClick={() => {
            if (currentPage === totalPages) {
              return;
            }

            onNextPage(currentPage);
          }}
          className={currentPage === totalPages ? 'opacity-25 justify-self-end' : 'opacity-75 hover:opacity-100 cursor-pointer justify-self-end'}>{'-->'}</div>
      </div>
    </div>
  )
}

interface RawFood {
  "Images": string[];
  "Restaurant Name": string | null;
  "Cuisine": string[];
  "Description": string;
  "Restaurant City": string;
  "Restaurant Country": string;
  "Restaurant Coordinates": string | null;
  "Restaurant Link": string | null;
  "Captured on": string;
  "Date": string | null;
  "Set": string;
}

interface Food {
  id: string;
  images: string[];
  cuisine: string[];
  description: string;
  city: string;
  country: string;
  
  restaurantName?: string;

  createdAt?: string;
  capturedOn: string;
}