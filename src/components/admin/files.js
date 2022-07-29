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
  ImageInput,
  ImageField,
} from "react-admin";
import FileCopy from "@mui/icons-material/FileCopy";
export const FileIcon = FileCopy;

export const FileList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <EditButton />
    </Datagrid>
  </List>
);

const FileTitle = ({ record }) => {
  return <span>Post {record ? `"${record.id}"` : ""}</span>;
};

export const FileEdit = (props) => (
  <Edit title={<FileTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput multiline source="body" />
      <ImageInput source="picture" label="Picture" accept="image/*">
        <ImageField source="url" title="id" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const FileCreate = (props) => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput multiline source="body" />
      <ImageInput source="picture" label="Picture" accept="image/*">
        <ImageField source="url" title="id" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
