import Image from "next/image";
import PaginationControl from "../../components/PaginationControl";
import { RawTravel } from "@/app/_types/travel";

const PAGE_SIZE = 9;

interface Props {
  currentPage: number;
  item: RawTravel;
}

export default async function TravelCollectionGrid({ currentPage, item }: Props) {
  const totalPages = Math.ceil(item.photos.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const links = item.photos.slice(startIndex, endIndex).map(photo => `https://d3ae3kedxtitrj.cloudfront.net/travel/${item.folder}/${photo}`)

  return (
    <div className="flex flex-col gap-8 py-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {links.map((image, i) => (
          <div key={i}>
            <Image
              src={image}
              width={512}
              height={1024}
              alt={`Image ${i + 1}`}
              className="max-h-[1024px]"
            />
          </div>
        ))}
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <PaginationControl currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  )
}