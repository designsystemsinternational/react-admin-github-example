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
  FileInput,
  FileField,
} from "react-admin";
import BookIcon from "@mui/icons-material/Book";
export const PostIcon = BookIcon;

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="slug" />
      <DateField source="createdAt" showTime />
      <EditButton />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const formatImage = (value) => {
  console.log(value);
  // Value is null or relative path from backend
  if (!value) {
    return value;
  }
  if (typeof value === "string") {
    return { hello: "https://assets.runemadsen.com/front/pds.jpg" };
  }
  // Value is array of strings
  else if (value instanceof Array) {
    return value.map((v) => ({
      hello: "https://assets.runemadsen.com/front/pds.jpg",
    }));
  }
  // Otherwise it's a new image that already has what it needs
  else {
    return value;
  }
};

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput multiline source="body" />
      <ImageInput
        source="picture"
        label="Picture"
        accept="image/*"
        format={formatImage}
      >
        <ImageField source="hello" title="title" />
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
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
