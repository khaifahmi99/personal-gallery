type Grade = "HG" | "HGUC" | "RG" | "MG" | "MGEX" | "PG";
type Scale = "1/144" | "1/100";

export interface Gundam {
  id: string;
  createdDate: string;
  displayName: string;
  seriesName: string;
  grade: Grade;
  scale: Scale;
  images: string[];
  purchaseUrls: string[];
}
