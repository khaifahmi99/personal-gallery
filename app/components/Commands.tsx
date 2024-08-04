import { getFoods } from "../_data/food";
import { getTravels } from "../_data/travel";
import { CommandMenu, CommandMenuProps } from "./CommandMenu";

export async function Commands() {
  const foodResponse = await getFoods({ fetchAll: true });
  const travelResponse = await getTravels({ fetchAll: true });

  const foods = foodResponse.foods.filter(food => food.restaurantName).map(food => ({
    title: food.restaurantName as string,
    category: 'food' as 'food' | 'travel',
    url: `/explore?id=${encodeURIComponent(food.id)}`
  }));

  const travels = travelResponse.travels.map(travel => ({
    title: travel.title,
    category: 'travel' as 'food' | 'travel',
    url: `/explore?id=${encodeURIComponent(travel.id)}`
  }))

  const results = [...foods, ...travels]

  return (
    <CommandMenu data={results} />
  )

}