import React, { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import { IUserContext } from '../../../contexts/users/IUserContext';
import { UserContext } from '../../..//contexts/users/UserContext';
import UserListItem from '../UserListItem';

export const UsersList = () => {
    const { users } = useContext<IUserContext>(UserContext);

    return (
        <>
        <div className="text-right">
            <Button href={"/users/add"} className="badge badge-success mr-2">Nuevo</Button>
        </div>        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {
                users?.map(user => (
                    <UserListItem key={user.id} user={user}></UserListItem>)
                    ) 
            }                
            </tbody>
        </Table>        
        </>
    );
}