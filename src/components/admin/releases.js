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

const ReleaseTitle = ({ record }) => {
  return <span>Release {record ? `"${record.title}"` : ""}</span>;
};

export const ReleaseEdit = (props) => (
  <Edit title={<ReleaseTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const ReleaseCreate = (props) => (
  <Create title="Create a Release" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
