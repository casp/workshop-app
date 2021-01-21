import React from 'react';
import { Link } from "react-router-dom";
import UserListItem from '../UserListItem';
import { Table } from 'react-bootstrap';
import { GetUsers } from '../../../services/users/UserService';

export const UsersList = () => {
    const users = GetUsers();
    return (
        <>
        <div className="text-right">
            <Link to={"/users/add"} className="nav-link">Nuevo</Link>
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