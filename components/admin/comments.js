import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  SimpleForm,
  TextInput,
  Edit,
} from "react-admin";

export const CommentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="comment" />
      <EditButton basePath="/comments" />
      <DeleteButton basePath="/comments" />
    </Datagrid>
  </List>
);

export const CommentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="article_id" />
      <TextInput source="name" />
      <TextInput multiline source="comment" />
    </SimpleForm>
  </Create>
);

export const CommentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="article_id" />
      <TextInput source="name" />
      <TextInput multiline source="comment" />
    </SimpleForm>
  </Edit>
);