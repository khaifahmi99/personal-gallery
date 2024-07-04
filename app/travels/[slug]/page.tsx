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
  return data.travels.find(travel => travel.folder === id);
}

export default function Travel({ params, searchParams }: Params) {
  const currentPage = Number(searchParams?.page) || 1;

  const item = getItemBySlug(params.slug);
  if (!item) {
    return <div>Not Found</div>
  }

  return (
    <section className='min-h-screen pt-48 w-full'>
      <div className='mx-auto container'>
        <h1 className='text-center text-2xl md:5xl uppercase'>{item.title}</h1>
      </div>
      <Suspense fallback={<p>Fetching Images...</p>}>
        <TravelItemGrid currentPage={currentPage} item={item} />
      </Suspense>
    </section>
  )
}

