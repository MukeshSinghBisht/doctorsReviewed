import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  averageRating?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  specialty?: SortOrder;
  totalRatings?: SortOrder;
  updatedAt?: SortOrder;
};
