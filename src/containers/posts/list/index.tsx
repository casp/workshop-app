import React, { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import { IPostContext } from '../../../contexts';
import { PostContext } from '../../../contexts/posts/PostContext';
import PostListItem from '../listItem';

export const PostsList = () => {
    const { posts } = useContext<IPostContext>(PostContext);
    return (
        <>
        <div className="text-right">
            <Button href={"/posts/add"} className="badge badge-success mr-2">Nuevo</Button>
        </div>        
        <Table striped bordered hover size="sm">
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