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
    .map((item) => ({
      ...item,
      id: `${item.folder}`,
      location: `${item.city}, ${item.country}`,
      cover: item.cover ? `https://d3ae3kedxtitrj.cloudfront.net/travel/${item.folder}/${item.cover}` : "/placeholder.jpg",
      capturedOn: item.captured_on,
      coordinates: [item.latitude, item.longitude],
    }));

  const totalImages = travels.flatMap((travel) => travel.photos).length;

  return {
    totalRecords: travels.length,
    totalPages,
    travels: travelRecords,
    totalImages,
  };
};
