import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { User } from '../../../models/User';
import { UpdateUser, GetUserById } from '../../../services/users/UserService';
import { useHistory, useParams } from "react-router-dom";

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
    const user: User = GetUserById(id);

    useEffect(() => {
      setFormData(user);
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const updateUser = (e: React.FormEvent<EventTarget>) => {
      e.preventDefault();
      
      UpdateUser(formData)
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
              <Link to={"/users"} className="nav-link">Listado</Link>
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