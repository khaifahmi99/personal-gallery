"server-only";

import { getFoods } from "./food";
import { getGundams } from "./gundam";
import { getTravels } from "./travel";

export const Data = {
  query: {
    getFoods,
    getTravels,
    getGundams,
  },
};
