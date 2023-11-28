import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DoctorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="averageRating" source="averageRating" />
        <TextInput label="name" source="name" />
        <TextInput label="speciality" source="speciality" />
        <NumberInput step={1} label="totalRatings" source="totalRatings" />
      </SimpleForm>
    </Create>
  );
};
