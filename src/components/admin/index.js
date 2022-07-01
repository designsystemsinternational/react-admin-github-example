import * as React from "react";
import { Admin, Resource } from "react-admin";
import { buildAuthProvider } from "@designsystemsinternational/react-admin-github";
import restProvider from "ra-data-simple-rest";
import { PostList, PostEdit, PostCreate, PostIcon } from "./posts";

const AdminPage = () => {
  return (
    <Admin
      authProvider={buildAuthProvider("/.netlify/functions/authenticate")}
      dataProvider={restProvider("http://localhost:3000")}
    >
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
