"server-only";

import { RawTravel, Travel } from "../_types/travel";

const PAGE_SIZE = 9;
type Props = {
  pageNumber?: number;
  fetchAll?: boolean;
};

export const getTravels = async ({
  pageNumber = 1,
  fetchAll = false,
}: Props) => {
  const res = await fetch(
    "https://raw.githubusercontent.com/khaifahmi99/personal-gallery/main/public/assets/travels/travels.json",
    {
      next: { revalidate: 3600 },
    }
  );
  const data = await res.json();

  const travels: RawTravel[] = data.travels;
  const totalPages = Math.ceil(travels.length / PAGE_SIZE);
  const startIndex = (pageNumber - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const travelRecords: Travel[] = travels
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(startIndex, fetchAll ? travels.length : endIndex)
    .map((item) => {

      // Format like "<2-digit><5-digit-number><.jpeg>...<2-digit><5-digit-numbe><.jpeg>"
      // eg. "AB00001.jpeg...AB00200.jpeg"
      const isRange = item.photos.length === 1 && item.photos[0].includes("...");
      const photos: string[] = isRange ? [] : item.photos;
      if (isRange) {
        const [start, end] = item.photos[0].split("...");
        const prefix = start.slice(0, 2); // "AB"
        const startNum = parseInt(start.slice(2, 7));
        const endNum = parseInt(end.slice(2, 7));

        for (let i = startNum; i <= endNum; i++) {
          const photo = `${prefix}${String(i).padStart(5, "0")}.jpeg`;
          photos.push(photo);
        } 

        console.log(`${item.title} is using range photos: ${photos[0]} to ${photos[photos.length - 1]} (${photos.length} photos)`);
      }

      return ({
        ...item,
        id: `${item.folder}`,
        photos: photos,
        location: `${item.city}, ${item.country}`,
        cover: item.cover ? `https://d3ae3kedxtitrj.cloudfront.net/travel/${item.folder}/${item.cover}` : "/placeholder.jpg",
        capturedOn: item.captured_on,
        coordinates: [item.latitude, item.longitude],
      })
    });

  const totalImages = travels.flatMap((travel) => travel.photos).length;

  return {
    totalRecords: travels.length,
    totalPages,
    travels: travelRecords,
    totalImages,
  };
};
