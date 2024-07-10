import { Suspense } from 'react';
import data from '../../../public/assets/travels/travels.json';
import TravelItemGrid from './TravelItemGrid';
import SparklesText from '@/components/magicui/sparkles-text';
import { LampTitle } from '@/components/aceternityui/lamp';

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
      <LampTitle>
      <h1 
          className="bg-gradient-to-br from-slate-50 to-slate-200 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          {item.title}
        </h1>
      </LampTitle>
      <div className="lg:-translate-y-36 translate-0">   
      <Suspense fallback={<p>Fetching Images...</p>}>
        <TravelItemGrid currentPage={currentPage} item={item} />
      </Suspense>
      </div>
    </section>
  )
}

