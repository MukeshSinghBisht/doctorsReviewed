import { Decimal } from "decimal.js";

export type DoctorCreateInput = {
  averageRating?: Decimal | null;
  name: string;
  specialty: string;
  totalRatings?: number | null;
};
