import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Post } from '../../../models/Post';
import { UpdatePost, GetPostById } from '../../../services/posts/PostService';
import { useHistory, useParams } from "react-router-dom";

const initialValues: Post = {  
  title: "",
  body: "",
  userId: 1,
}

export const PostUpdate = () => {
    const history = useHistory();
    const { id } = useParams<number>();
        
    const [formData, setFormData] = useState<Post>(initialValues);
    const post: Post = GetPostById(id);
    console.log(post);
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
      
      UpdatePost(formData)
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
              <Link to={"/posts"} className="nav-link">Listado</Link>
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