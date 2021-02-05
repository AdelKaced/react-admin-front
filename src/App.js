import authProvider from "./authProvider";
import simpleRestProvider from "ra-data-simple-rest";

import { Admin, Resource } from "react-admin";

import { Users } from './Users'

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={simpleRestProvider("http://localhost:4000")}
  >
    <Resource name="users" list={Users}/>
  </Admin>
);

export default App;
