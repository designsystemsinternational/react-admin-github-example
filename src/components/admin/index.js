import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  buildAuthProvider,
  buildDataProvider,
} from "@designsystemsinternational/react-admin-github";
import { PostList, PostEdit, PostCreate, PostIcon } from "./posts";
import { FileList, FileCreate, FileIcon } from "./files";
import {
  ReleaseList,
  ReleaseCreate,
  ReleaseEdit,
  ReleaseIcon,
} from "./releases";

const authProvider = buildAuthProvider("/.netlify/functions/proxy");
const dataProvider = buildDataProvider("/.netlify/functions/proxy", {
  filesPath: "[resource]/[slug]",
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
      <Resource
        name="files"
        list={FileList}
        create={FileCreate}
        icon={FileIcon}
      />
      <Resource
        name="releases"
        list={ReleaseList}
        edit={ReleaseEdit}
        create={ReleaseCreate}
        icon={ReleaseIcon}
      />
    </Admin>
  );
};

export default AdminPage;
