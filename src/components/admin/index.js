import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  buildAuthProvider,
  buildDataProvider,
} from "@designsystemsinternational/react-admin-github";
import { PostList, PostEdit, PostCreate, PostIcon } from "./posts";
import { ReleaseList, ReleaseCreate, ReleaseIcon } from "./releases";
import { UserList, UserEdit, UserCreate, UserIcon } from "./users";

const authProvider = buildAuthProvider("/.netlify/functions/proxy");
const dataProvider = buildDataProvider("/.netlify/functions/proxy", {
  resources: {
    posts: {
      handler: "json",
      filenameFromProperty: "title",
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
      <Resource
        name="releases"
        list={ReleaseList}
        create={ReleaseCreate}
        icon={ReleaseIcon}
      />
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon}
      />
    </Admin>
  );
};

export default AdminPage;
