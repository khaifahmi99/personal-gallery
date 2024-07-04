import Image from "next/image";
import PaginationControl from "../components/PaginationControl";
import { Data } from "../_data";

interface Props {
  currentPage: number;
}

export default async function PhotoGrid({ currentPage }: Props) {
  const { foods, totalPages } = await Data.query.getFoods({ pageNumber: currentPage });

  return (
    <div className="flex flex-col gap-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {foods.map((food, i) => (
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
      <div className="container px-2 mx-auto">
        <PaginationControl currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  )
}
