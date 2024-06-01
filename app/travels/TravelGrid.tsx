'use client'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import data from '../../public/assets/travels/travels.json';

const PAGE_SIZE = 9;

async function getData({ pageNumber }: { pageNumber: number }): Promise<[{link: string; title: string;}[], number]> {
  const totalPage = Math.ceil(data.travels.length / PAGE_SIZE);

  const offset = (pageNumber - 1) * PAGE_SIZE;
  const converted = data.travels
    .sort((a, b) => {
      return (new Date(b.date)).getTime() - (new Date(a.date)).getTime()
    })
    .slice(offset, offset + PAGE_SIZE)
    .map((item: RawTravel) => ({
      link: `https://d3ae3kedxtitrj.cloudfront.net/travel/${item.folder}/${item.cover}`,
      title: `${item.city}, ${item.country}`})
    );

  return [converted, totalPage];
}

interface Props {
  currentPage: number;
}

export default async function PhotoGrid({ currentPage }: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();

  const data = await getData({ pageNumber: currentPage });
  const images = data[0];
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
        {images.map((image, i) => (
          <div key={i} className="relative">
            <Image
              src={image.link}
              width={512}
              height={1024}
              alt={`Image ${i + 1}`}
            />
            <div className='main-section absolute top-10 inset-x-0 text-white pointer-events-none'>
              <div className='p-2 truncate'>
                <div className='main-header pb-4'>
                  <div className='italic'>
                   📍{image.title}
                  </div>
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

interface RawTravel {
  "title": string;
  "city": string;
  "country": string;
  "date": string;
  "collections": string[];
  "captured_on": string;
  "folder": string;
  "cover": string;
  "photos": string[];
}