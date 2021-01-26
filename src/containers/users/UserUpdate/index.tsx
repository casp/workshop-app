import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams, Link } from "react-router-dom";
import { User } from '../../../models/User';
import { UpdateUser, GetUserById } from '../../../services/users/UserService';
import { GetById, Update } from '../../../services/GenericService';
import { USER_URL } from '../../../resources';

const initialValues: User = {  
  email: "",
  first_name: "",
  last_name: "",
  avatar: "",
}

export const UserUpdate = () => {
    const history = useHistory();
    const { id } = useParams<number>();
    const [formData, setFormData] = useState<User>(initialValues);
    //const user: User = GetUserById(id);
    const user: User = GetById<User>(USER_URL, id);
 
    useEffect(() => {
      if(user !== undefined)
      {
        setFormData(user.data);
      }
      
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const updateUser = (e: React.FormEvent<EventTarget>) => {
      e.preventDefault();
      
      Update<User>(USER_URL,formData)
        .then(response => {
          history.push("/users");
        })
        .catch(e => {
          console.log(e);
        });
    };

    return (   
        <>   
        { formData && (
          <>
            <div className="text-right">
              <Button href={"/users"} className="badge badge-secondary mr-2">Listado</Button>
            </div>
            <Form onSubmit={updateUser}>              
              <Form.Control type="hidden" name="id" value={formData.id} />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} placeholder="Enter email" onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="text" name="first_name"  value={formData.first_name} placeholder="Enter First Name"  onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="text" name="last_name" value={formData.last_name} placeholder="Enter Last Name" onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicLastAvatar">
                <Form.Label>Avatar:</Form.Label>
                <Form.Control type="text" name="avatar"value={formData.avatar}  placeholder="Enter url for your avatar" onChange={handleChange} />
              </Form.Group>

              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </>
        )
      }   
    </>    
    );
}