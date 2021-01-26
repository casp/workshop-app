import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Post } from '../../../models/Post';
import { Create } from '../../../services/GenericService';
import { POST_URL } from '../../../resources';
import { HusaForm } from '../../../components';

const postFormItems = require('../postFormItems.json');

const initialValues: Post = {  
  title: "",
  body: "",
  userId: 1,
}

export const PostAdd = () => {
    const [formData, setFormData] = useState<Post>(initialValues);
    const history = useHistory();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e);
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const newPost = (e: React.FormEvent<EventTarget>) => {
      console.log(formData);
      e.preventDefault();
      
      Create<Post>(POST_URL,formData)
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
          <Button href={"/posts"} className="badge badge-secondary mr-2">Listado</Button>
        </div>  
        <HusaForm {...postFormItems} onSubmit={newPost} />  
      </>
    );
}