import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  buildAuthProvider,
  buildJsonDataProvider,
} from "@designsystemsinternational/react-admin-github";
import { PostList, PostEdit, PostCreate, PostIcon } from "./posts";

const authProvider = buildAuthProvider("/.netlify/functions/authenticate");
const dataProvider = buildJsonDataProvider("/.netlify/functions/proxy");

const AdminPage = () => {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
    </Admin>
  );
};

export default AdminPage;
