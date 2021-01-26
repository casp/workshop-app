import React from 'react';
import { Button } from 'react-bootstrap';
import { UserProps } from '../../../interfaces/UserProps';
import { Remove } from '../../../services/GenericService';
import { USER_URL } from '../../../resources';
import { useHistory } from "react-router-dom";

const UserListItem = (props: UserProps) => {
    const history = useHistory();

    const deleteUser = (row: number) => {
        Remove(USER_URL, row)
        .then(response => {
            console.log(response.data);
            history.push("/users");
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <tr>
            <td>{props.user.email}</td>
            <td>{props.user.first_name}</td>
            <td>{props.user.last_name}</td>
            <td>
                <Button className="badge badge-primary mr-2" href={`/users/update/${props.user.id}`}>Update</Button>
                <Button className="badge badge-danger mr-2" onClick={() => deleteUser(props.user.id)}>Delete</Button>
            </td>
        </tr>
    );
}

export default UserListItem;