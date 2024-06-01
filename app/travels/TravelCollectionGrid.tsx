import Image from "next/image";
import data from '../../public/assets/travels/travels.json';
import PaginationControl from "../components/PaginationControl";
import Link from "next/link";

const PAGE_SIZE = 9;

async function getData({ pageNumber }: { pageNumber: number }): Promise<[{cover: string; title: string; id: string;}[], number]> {
  const totalPage = Math.ceil(data.travels.length / PAGE_SIZE);

  const offset = (pageNumber - 1) * PAGE_SIZE;
  const converted = data.travels
    .sort((a, b) => {
      return (new Date(b.date)).getTime() - (new Date(a.date)).getTime()
    })
    .slice(offset, offset + PAGE_SIZE)
    .map((item: RawTravel) => ({
      title: `${item.city}, ${item.country}`,
      cover: `https://d3ae3kedxtitrj.cloudfront.net/travel/${item.folder}/${item.cover}`,
      id: `${item.folder}`
    }));

  return [converted, totalPage];
}

interface Props {
  currentPage: number;
}

export default async function TravelCollectionGrid({ currentPage }: Props) {
  const data = await getData({ pageNumber: currentPage });
  const images = data[0];
  const totalPages = data[1];

  return (
    <div className="flex flex-col gap-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {images.map((image, i) => (
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
      <PaginationControl currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

export interface RawTravel {
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