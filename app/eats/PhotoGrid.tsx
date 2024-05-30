'use client'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const PAGE_SIZE = 9;

async function getData({ pageNumber }: { pageNumber: number }): Promise<[string[], number]> {
  const res = await fetch('https://raw.githubusercontent.com/khaifahmi99/art-canvas-blog/main/public/assets/food/main.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json();

  const offset = (pageNumber - 1) * PAGE_SIZE;
  const images = data.foods.reverse().slice(offset, offset + PAGE_SIZE).map((item: { Images: string[]; }) => `https://d3ae3kedxtitrj.cloudfront.net/food/${item.Images[0]}`);

  const totalPage = Math.ceil(data.foods.length / PAGE_SIZE);

  return [images, totalPage];
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
          <div key={i}>
            <Image
              src={image}
              width={512}
              height={1024}
              alt={`Image ${i + 1}`}
            />
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