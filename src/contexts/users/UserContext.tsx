import React, { createContext } from 'react';
import { IUserContext } from './IUserContext';
import { User } from '../../models/User';
import { GetAll } from '../../services/GenericService';
import { USER_URL } from '../../resources';

export const UserContext = createContext<IUserContext>({
  users: []
});

const UserProvider = (props: any) => {
  const users = GetAll<User>(USER_URL).data;
  return (
    <UserContext.Provider value={{ users }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;