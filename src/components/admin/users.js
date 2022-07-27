import * as React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  TextInput,
  PasswordInput,
} from "react-admin";
import GroupIcon from "@mui/icons-material/Group";
export const UserIcon = GroupIcon;

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="_ragInfo.slug" label="Email" />
      <EditButton />
    </Datagrid>
  </List>
);

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.fullName}"` : ""}</span>;
};

export const UserEdit = (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" label="Email" />
      <TextInput source="fullName" label="Full name" />
      <TextInput source="avatar" label="Avatar URL" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create title="Create a User" {...props}>
    <SimpleForm>
      <TextInput source="id" label="Email" />
      <TextInput source="fullName" label="Full name" />
      <TextInput source="avatar" label="Avatar URL" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);
