import { getFoods } from "../_data/food";
import { getGundams } from "../_data/gundam";
import { getTravels } from "../_data/travel";
import { Category, CommandMenu } from "./CommandMenu";

export async function Commands() {
  const foodResponse = await getFoods({ fetchAll: true });
  const travelResponse = await getTravels({ fetchAll: true });
  const gundamResponse = await getGundams();

  const foods = foodResponse.foods.filter(food => food.restaurantName).map(food => ({
    title: food.restaurantName as string,
    category: 'food' as Category,
    url: `/explore?id=${encodeURIComponent(food.id)}`
  }));

  const travels = travelResponse.travels.map(travel => ({
    title: travel.title,
    category: 'travel' as Category,
    url: `/explore?id=${encodeURIComponent(travel.id)}`
  }));

  const gundams = gundamResponse.map(gundam => ({
    title: gundam.displayName,
    category: 'gundam' as Category,
    url: `/collections/gundam?id=${encodeURIComponent(gundam.id)}`
  }))

  const results = [...foods, ...travels, ...gundams]

  return (
    <CommandMenu data={results} />
  )

}