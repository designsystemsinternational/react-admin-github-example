import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  buildAuthProvider,
  buildDataProvider,
} from "@designsystemsinternational/react-admin-github";
import { PostList, PostEdit, PostCreate, PostIcon } from "./posts";

const authProvider = buildAuthProvider("/.netlify/functions/proxy");
const dataProvider = buildDataProvider("/.netlify/functions/proxy", {
  resources: {
    posts: {
      handler: "json",
      slug: "title",
    },
  },
});

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
