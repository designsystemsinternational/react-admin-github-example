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
import BookIcon from "@mui/icons-material/Book";
export const PostIcon = BookIcon;

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="_ragInfo.createdAt" showTime />
      <EditButton />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
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

export const PostCreate = (props) => (
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
