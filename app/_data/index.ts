"server-only"

import { getFoods } from "./food"
import { getTravels } from "./travel"

export const Data = {
  query: {
    getFoods,
    getTravels,
  }
}