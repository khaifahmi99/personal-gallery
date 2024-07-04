import { Suspense } from 'react';
import data from '../../../public/assets/travels/travels.json';
import TravelItemGrid from './TravelItemGrid';
import SparklesText from '@/components/magicui/sparkles-text';

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
        <SparklesText 
          className='text-center text-2xl md:5xl uppercase' 
          text={item.title} 
          colors={{ first: '#4ade80', second: '#a78bfa',}}
        />
      </div>
      <Suspense fallback={<p>Fetching Images...</p>}>
        <TravelItemGrid currentPage={currentPage} item={item} />
      </Suspense>
    </section>
  )
}

