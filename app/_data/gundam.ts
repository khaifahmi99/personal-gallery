"server-only";

import { Gundam } from "../_types/gundam";

export const getGundams = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/khaifahmi99/personal-gallery/main/public/assets/collections/gundam.json",
    {
      next: { revalidate: 3600 },
    }
  );
  const data = await res.json();

  const gundams: Gundam[] = data.models.map((g: Gundam) => ({
    ...g,
    images: g.images.map(
      (img) => `https://d3ae3kedxtitrj.cloudfront.net/gundam/${img}`
    ),
  }));

  return gundams;
};
