import { useEffect, useState } from "react";
import { User } from "../../models/User";
import axios from 'axios';

const API_URL = "https://reqres.in/"

const GetUsers = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        axios.get<User[]>(API_URL + 'api/users/', {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                setData(response.data.data);
            });
        
    }, []);
    
    return data;
}

const GetUserById = (id : number) => {
  const [data, setData] = useState<User>('');
  
  useEffect(() => {
    axios.get<User>(API_URL + `api/users/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        setData(response.data.data);
    });
  }, [id]);

  return data;
};

const CreateUser = (data : User) => {
  return axios.post(API_URL + 'api/users/', data);
};

const UpdateUser = (data : User) => {
  return axios.put(API_URL + `api/users/${data.id}`, data);
};

const RemoveUser = (id : number) => {
  return axios.delete(API_URL + `api/users/${id}`);
};

export {
  GetUsers,
  GetUserById,
  CreateUser,
  UpdateUser,
  RemoveUser
}