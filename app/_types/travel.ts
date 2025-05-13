export interface RawTravel {
  "title": string;
  "city": string;
  "country": string;
  "date": string;
  "collections": string[];
  "captured_on": string;
  "folder": string;
  "cover": string | null;
  "photos": string[];
  latitude: number;
  longitude: number;
}

export interface Travel {
  id: string; // folder name
  title: string;
  cover: string; // cover image URL
  location: string;
  city: string;
  country: string;
  date: string;
  collections: string[];
  capturedOn: string;
  photos: string[];
  coordinates: [number, number];
}