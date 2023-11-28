import { Decimal } from "decimal.js";

export type DoctorUpdateInput = {
  averageRating?: Decimal | null;
  name?: string;
  speciality?: string;
  totalRatings?: number | null;
};
