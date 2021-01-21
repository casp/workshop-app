import React, { createContext } from 'react';
import { IUserContext } from './IUserContext';
import { GetUsers } from '../../services/users/UserService';

export const UserContext = createContext<IUserContext>({
    users: [],
});

const UserProvider = (props: any) => {
    const users = GetUsers();

    return (
        <UserContext.Provider value={{ users }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;