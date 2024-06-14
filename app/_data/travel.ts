"server-only"

import { RawTravel } from "../_types/travel";

const PAGE_SIZE = 9;
export const getTravels = async (pageNumber = 1) => {
  const res = await fetch('https://raw.githubusercontent.com/khaifahmi99/personal-gallery/main/public/assets/travels/travels.json', {
    next: { revalidate: 3600 }
  })
  const data = await res.json()

  const travels: RawTravel[] = data.travels;
  const totalPages = Math.ceil(travels.length / PAGE_SIZE);
  const startIndex = (pageNumber - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const travelRecords = travels.sort((a, b) => {
      return (new Date(b.date)).getTime() - (new Date(a.date)).getTime()
    })
    .slice(startIndex, endIndex)
    .map((item) => ({
      title: `${item.city}, ${item.country}`,
      cover: `https://d3ae3kedxtitrj.cloudfront.net/travel/${item.folder}/${item.cover}`,
      id: `${item.folder}`
    })
  );

  const totalImages = travels.flatMap(travel => travel.photos).length;

  return {
    totalRecords: travels.length,
    totalPages,
    travels: travelRecords,
    totalImages,
  }
}