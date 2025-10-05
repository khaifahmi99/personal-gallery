import { Suspense } from 'react';
import data from '../../../public/assets/travels/travels.json';
import TravelItemGrid from './TravelItemGrid';

type Params = {
  params: {
    slug: string;
  };
  searchParams?: {
    page?: string;
  };

};

function getItemBySlug(id: string) {
  const item = data.travels.find(travel => travel.folder === id);
  if (!item) {
    return null;
  };

  const isUsingRange = item.photos.length === 1 && item.photos[0].includes("...");
  if (!isUsingRange) {
    return item;
  }

  const [start, end] = item.photos[0].split("...");
  const prefix = start.slice(0, 2); // "AB"
  const startNum = parseInt(start.slice(2, 7));
  const endNum = parseInt(end.slice(2, 7));

  const photos: string[] = [];
  for (let i = startNum; i <= endNum; i++) {
    const photo = `${prefix}${String(i).padStart(5, "0")}.jpeg`;
    photos.push(photo);
  }

  return {
    ...item,
    photos: photos,
  };
}

export default function Travel({ params, searchParams }: Params) {
  const currentPage = Number(searchParams?.page) || 1;

  const item = getItemBySlug(params.slug);
  if (!item) {
    return <div>Not Found</div>
  }

  return (
    <section className='min-h-screen pt-48 w-full'>
      <h1
        className="bg-gradient-to-br from-slate-50 to-slate-200 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        {item.title}
      </h1>
      <div className="">
        <Suspense fallback={<p>Fetching Images...</p>}>
          <TravelItemGrid currentPage={currentPage} item={item} />
        </Suspense>
      </div>
    </section>
  )
}

