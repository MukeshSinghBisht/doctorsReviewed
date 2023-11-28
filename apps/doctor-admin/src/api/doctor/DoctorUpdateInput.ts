import { Decimal } from "decimal.js";

export type DoctorUpdateInput = {
  averageRating?: Decimal | null;
  name?: string;
  specialty?: string;
  totalRatings?: number | null;
};
