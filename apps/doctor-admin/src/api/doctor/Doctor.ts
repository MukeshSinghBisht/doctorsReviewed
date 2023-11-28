import { Decimal } from "decimal.js";

export type Doctor = {
  averageRating: Decimal | null;
  createdAt: Date;
  id: string;
  name: string;
  speciality: string;
  totalRatings: number | null;
  updatedAt: Date;
};
