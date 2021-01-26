import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import { Post } from '../../../models/Post';
import { GetById, Update } from '../../../services/GenericService';
import { POST_URL } from '../../../resources';

const initialValues: Post = {  
  title: "",
  body: "",
  userId: 1,
}

export const PostUpdate = () => {
    const history = useHistory();
    const { id } = useParams<number>();        
    const [formData, setFormData] = useState<Post>(initialValues);
    const post: Post = GetById<Post>(POST_URL, id);
    
    useEffect(() => {
      setFormData(post);
    }, [post]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const updatePost = (e: React.FormEvent<EventTarget>) => {
      e.preventDefault();
      
      Update<Post>(POST_URL, formData)
        .then(response => {
          history.push("/posts");
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
              <Button href={"/posts"} className="badge badge-secondary mr-2">Listado</Button>
            </div>
            <Form onSubmit={updatePost}>              
              <Form.Control type="hidden" name="id" value={formData.id} />
              <Form.Control type="hidden" name="userId" value={formData.userId} />
              <Form.Group controlId="formBasicTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" name="title"  value={formData.title} placeholder="Enter title" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicFirstBody">
                <Form.Label>Body:</Form.Label>
                <Form.Control type="text" name="body" value={formData.body}  placeholder="Enter Body"  onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </>
        )
      }   
    </>    
    );
}