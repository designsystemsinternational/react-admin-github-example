import * as React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  DateField,
  EditButton,
  TextInput,
  BooleanInput,
} from "react-admin";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
export const ReleaseIcon = NewReleasesIcon;

export const ReleaseList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <DateField source="createdAt" showTime />
      <EditButton />
    </Datagrid>
  </List>
);

export const ReleaseCreate = (props) => (
  <Create title="Create a Release" {...props}>
    <SimpleForm>
      <BooleanInput label="Prerelease" source="prerelease" />
      <TextInput source="name" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
