import * as React from "react";
import { List, Datagrid, TextField} from 'react-admin';

export const Users = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="email" />
        </Datagrid>
    </List>
);