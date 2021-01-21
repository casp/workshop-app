import React from 'react';
import { Link } from "react-router-dom";
import PostListItem from '../PostListItem';
import { Table } from 'react-bootstrap';
import { GetPosts } from '../../../services/posts/PostService';

export const PostsList = () => {
    const posts = GetPosts();

    return (
        <>
        <div className="text-right">
            <Link to={"/posts/add"} className="nav-link">Nuevo</Link>
        </div>        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>                    
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {
                posts?.map(post => (
                    <PostListItem key={post.id} post={post}></PostListItem>)
                    ) 
            }                
            </tbody>
        </Table>        
        </>
    );
}