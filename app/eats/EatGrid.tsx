import Image from "next/image";
import PaginationControl from "../components/PaginationControl";

import data from '../../public/assets/eats/eats.json';

const PAGE_SIZE = 9;

async function getData({ pageNumber }: { pageNumber: number }): Promise<[Food[], number]> {
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
  const data = await getData({ pageNumber: currentPage });
  const records = data[0];
  const totalPages = data[1];

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
            <div className='absolute top-2 left-2 bg-opacity-50 bg-indigo-700 rounded-lg px-2 text-white cursor-default pointer-events-none'>
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
      <PaginationControl currentPage={currentPage} totalPages={totalPages} />
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