import Image from "next/image";
import PaginationControl from "../components/PaginationControl";
import Link from "next/link";
import { Data } from "../_data";


interface Props {
  currentPage: number;
}

export default async function TravelCollectionGrid({ currentPage }: Props) {
  const { travels, totalPages } = await Data.query.getTravels({ pageNumber: currentPage });

  return (
    <div className="flex flex-col gap-8 py-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {travels.map((image, i) => (
          <Link href={`/travels/${image.id}`} key={i} className="relative">
            <Image
              src={image.cover}
              width={512}
              height={1024}
              alt={`Image ${i + 1}`}
            />
            <div className='main-section absolute inset-2 text-white pointer-events-none'>
              <div className='p-2 truncate'>
                <div className='main-header pb-4'>
                  <div>
                   <span>📍</span><span className='italic'>{image.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="container mx-auto px-2">
        <PaginationControl currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  )
}