import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DoctorWhereInput = {
  averageRating?: DecimalNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  speciality?: StringFilter;
  totalRatings?: IntNullableFilter;
};
