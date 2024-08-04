"server-only";

import { Food, RawFood } from "../_types/food";

const PAGE_SIZE = 9;
type Props = {
  pageNumber?: number;
  fetchAll?: boolean;
};

export const getFoods = async ({ pageNumber = 1, fetchAll = false }: Props) => {
  const res = await fetch(
    "https://raw.githubusercontent.com/khaifahmi99/personal-gallery/main/public/assets/eats/eats.json",
    {
      next: { revalidate: 3600 },
    }
  );
  const data = await res.json();

  const foods: RawFood[] = data.foods;
  const totalPages = Math.ceil(foods.length / PAGE_SIZE);
  const startIndex = (pageNumber - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const foodRecords: Food[] = foods
    .reverse()
    .slice(startIndex, fetchAll ? foods.length : endIndex)
    .map((rawFood, i) => {
      return {
        id: rawFood["Restaurant Name"] ?? `food-${i}`,
        images: [
          `https://d3ae3kedxtitrj.cloudfront.net/food/${rawFood["Images"][0]}`,
        ],
        cuisine: rawFood["Cuisine"],
        description: rawFood["Description"],
        city: rawFood["Restaurant City"],
        country: rawFood["Restaurant Country"],
        coordinates: rawFood["Restaurant Coordinates"] ?? undefined,

        restaurantName: rawFood["Restaurant Name"] ?? undefined,

        capturedOn: rawFood["Captured on"],
        createdAt: rawFood["Date"] ?? undefined,
      };
    });

  const totalImages = foods.flatMap((food) => food["Images"]).length;

  return {
    totalRecords: foods.length,
    totalPages,
    foods: foodRecords,
    totalImages,
  };
};
