import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Post } from '../../../models/Post';
import { CreatePost } from '../../../services/posts/PostService';
import { useHistory } from "react-router-dom";

const initialValues: Post = {  
  title: "",
  body: "",
  userId: 1,
}

export const PostAdd = () => {
    const [formData, setFormData] = useState<Post>(initialValues);
    const history = useHistory();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const newPost = (e: React.FormEvent<EventTarget>) => {
      e.preventDefault();
      
      CreatePost(formData)
        .then(response => {
          history.push("/posts");
        })
        .catch(e => {
          console.log(e);
        });
    };

    return (
      <>
        <div className="text-right">
          <Link to={"/posts"} className="nav-link">Listado</Link>
        </div>  
        <Form>
          <Form.Control type="hidden" name="userId" value="1" />
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter title" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicFirstBody">
            <Form.Label>Body:</Form.Label>
            <Form.Control type="text" name="body" placeholder="Enter Body"  onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={newPost}>Submit</Button>
        </Form>        
      </>
    );
}