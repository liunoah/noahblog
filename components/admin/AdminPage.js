import React from 'react';
import { Admin, Resource, List, Datagrid, TextField, Edit, SimpleForm, TextInput } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('https://liunoah.com:4000/blogs');
const BlogList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="text" />
      <TextField source="name" />
      <TextField source="ip" />
      <TextField source="hide" />
      <TextField source="created_at" />
      <TextField source="updated_at" />
      <TextField source="frequency" />
    </Datagrid>
  </List>
);

const BlogEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="text" />
      <TextInput source="name" />
      <TextInput source="ip" />
      <TextInput source="hide" />
    </SimpleForm>
  </Edit>
);

const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="admin" list={BlogList} edit={BlogEdit} />
  </Admin>
);

export default AdminPage;