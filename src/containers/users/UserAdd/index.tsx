import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import { User } from '../../../models/User';
import { Create } from '../../../services/GenericService';
import { USER_URL } from '../../../resources/';

const initialValues: User = {  
  email: "",
  first_name: "",
  last_name: "",
  avatar: "",
}

export const UserAdd = () => {
    const [formData, setFormData] = useState<User>(initialValues);
    const history = useHistory();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const newUser = (e: React.FormEvent<EventTarget>) => {
      e.preventDefault();
      
      Create<User>(USER_URL, formData)
        .then(response => {
          history.push("/users");
        })
        .catch(e => {
          console.log(e);
        });
    };

    return (
      <>
        <div className="text-right">
          <Button href={"/users"} className="badge badge-secondary mr-2">Listado</Button>
        </div>  
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" name="first_name" placeholder="Enter First Name"  onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicLastAvatar">
            <Form.Label>Avatar:</Form.Label>
            <Form.Control type="text" name="avatar" placeholder="Enter url for your avatar" onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={newUser}>Submit</Button>
        </Form>        
      </>
    );
}