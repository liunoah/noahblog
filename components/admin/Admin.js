import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PostList, PostEdit, PostCreate } from "./posts";
import { CommentList, CommentEdit, CommentCreate } from "./comments";

const API_URL = "https://liunoah.com:4000"; // 根据你的 API 端口进行调整

const dataProvider = jsonServerProvider(API_URL);

const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="blog"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="comments"
      list={CommentList}
      edit={CommentEdit}
      create={CommentCreate}
    />
  </Admin>
);

export default AdminPage;