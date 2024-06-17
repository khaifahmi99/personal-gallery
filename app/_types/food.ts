
export interface RawFood {
  "Images": string[];
  "Restaurant Name": string | null;
  "Cuisine": string[];
  "Description": string;
  "Restaurant City": string;
  "Restaurant Country": string;
  "Restaurant Coordinates": string | null;
  "Restaurant Link": string | null;
  "Captured on": string;
  "Date": string | null;
  "Set": string;
}

export interface Food {
  id: string;
  images: string[];
  cuisine: string[];
  description: string;
  city: string;
  country: string;
  coordinates?: [number, number];
  
  restaurantName?: string;

  createdAt?: string;
  capturedOn: string;
}