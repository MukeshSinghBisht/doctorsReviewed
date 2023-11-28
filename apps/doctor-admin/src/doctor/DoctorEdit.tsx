import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DoctorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="averageRating" source="averageRating" />
        <TextInput label="name" source="name" />
        <TextInput label="specialty" source="specialty" />
        <NumberInput step={1} label="totalRatings" source="totalRatings" />
      </SimpleForm>
    </Edit>
  );
};
