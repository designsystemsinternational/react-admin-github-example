import * as React from "react";
import {
  List,
  Datagrid,
  Create,
  SimpleForm,
  TextField,
  DateField,
  TextInput,
  FileInput,
  FileField,
} from "react-admin";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
export const FileIcon = InsertDriveFileIcon;

export const FileList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <DateField source="createdAt" showTime />
    </Datagrid>
  </List>
);

export const FileCreate = (props) => (
  <Create title="Upload a file" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <FileInput source="picture" label="Picture" accept="image/*">
        <FileField source="url" title="name" />
      </FileInput>
    </SimpleForm>
  </Create>
);
