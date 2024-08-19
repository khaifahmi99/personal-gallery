import { Gundam } from "@/app/_types/gundam"
import Image from "next/image";
import Link from "next/link";

type Props = {
  gundam: Gundam;
}

export function Card({ gundam }: Props) {
  const date = new Date(gundam.createdDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className='flex flex-col text-slate-50 bg-white rounded-xl'>
      <div className="grid grid-cols-3">
        <div className="relative md:col-span-2 bg-slate-800 rounded-l-lg px-4 py-4">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-4xl text-white">{gundam.displayName}</h1>
              <h2 className="text-xl">from {gundam.seriesName}</h2>
            </div>
            <div className="px-2 py-1 rounded-lg bg-slate-50 text-slate-800 h-fit">
              {date}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div>
              <span>Grade: </span>
              <span className="font-bold">{gundam.grade}</span>
            </div>
            <div>
              <span>Scale: </span>
              <span className="font-bold">{gundam.scale}</span>
            </div>
          </div>
          <div className='absolute bottom-4 right-4'>
            <div className="flex flex-row-reverse gap-2">
              {gundam.purchaseUrls.map(url => (
                <BuyButton key={url} link={url} />
              ))}
            </div>
          </div>
        </div>
        <div className="relative bg-white h-full min-h-[480px] rounded-r-lg">
          <Image
            src={gundam.images[0]}
            alt={gundam.displayName}
            className="rounded-lg p-4"
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
      </div>
    </div>
  )
}

export function MiniCard({ gundam }: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-4 bg-slate-900">
      <div className="flex justify-center">
        <Image
          src={gundam.images[0]}
          alt={gundam.displayName}
          height={240}
          width={180}
        />
      </div>
      <div>
        <h1 className="text-lg">{gundam.displayName}</h1>
        <h2 className="text-sm">from {gundam.seriesName}</h2>
      </div>
      <div className="flex flex-row gap-2 text-xs">
        {gundam.purchaseUrls.map(url => (
          <BuyButton key={url} link={url} />
        ))}
      </div>
    </div>
  )
}

const BuyButton = ({ link }: { link: string }) => {
  let provider: 'Hobbyco' | 'Metro Hobbies' | 'Amazon' | 'Others';

  if (link.includes('hobbyco')) {
    provider = 'Hobbyco';
  } else if (link.includes('metrohobbies')) {
    provider = 'Metro Hobbies';
  } else if (link.includes('amazon')) {
    provider = 'Amazon';
  } else {
    provider = 'Others';
  }

  return (
    <div>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <button className="rounded-lg bg-transparent hover:bg-slate-50 text-slate-50 hover:text-slate-800 border-2 border-slate-50 px-4 py-2">
          Buy on {provider}
        </button>
      </Link>
    </div>
  )
}