import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  buildAuthProvider,
  buildDataProvider,
} from "@designsystemsinternational/react-admin-github";
import { PostList, PostEdit, PostCreate, PostIcon } from "./posts";
import { ReleaseList, ReleaseCreate, ReleaseIcon } from "./releases";

const authProvider = buildAuthProvider("/.netlify/functions/proxy");
const dataProvider = buildDataProvider("/.netlify/functions/proxy", {
  filesPath: (resource, data) => `${resource}/${data.id.replace(".json", "")}`,
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
    </Admin>
  );
};

export default AdminPage;
