import { useEffect, useState } from "react";
import { Post } from "../../models/Post";
import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/"

const GetPosts = () => {
    const [data, setData] = useState<Post[]>([]);

    useEffect(() => {
        axios.get<Post[]>(API_URL + 'posts/', {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                setData(response.data);
            });
        
    }, []);
    
    return data;
}

const GetPostById = (id : number) => {
  const [data, setData] = useState<Post>({});
  
  useEffect(() => {
    axios.get<Post>(API_URL + `posts?id=${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        setData(response.data[0]);
    });
  }, [id]);

  return data;
};


const CreatePost = (data : Post) => {
  return axios.post(API_URL + 'posts/', {method: 'POST', data});
};

const UpdatePost = (data : Post) => {
  return axios.put(API_URL + `posts/${data.id}`, data);
};

const RemovePost = (id : number) => {
  return axios.delete(API_URL + `posts/${id}`);
};

export {
  GetPosts,
  GetPostById,
  CreatePost,
  UpdatePost,
  RemovePost
}