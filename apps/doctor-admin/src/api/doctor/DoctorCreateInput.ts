import { Decimal } from "decimal.js";

export type DoctorCreateInput = {
  averageRating?: Decimal | null;
  name: string;
  speciality: string;
  totalRatings?: number | null;
};
