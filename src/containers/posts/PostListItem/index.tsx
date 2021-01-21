import React from 'react';
import { Button } from 'react-bootstrap';
import { PostProps } from '../../../interfaces/PostProps';
import { RemovePost } from '../../../services/posts/PostService';
import { useHistory } from "react-router-dom";

const PostListItem = (props: PostProps) => {
    const history = useHistory();

    const deletePost = (row: number) => {
        RemovePost(row)
        .then(response => {
            history.push("/posts");
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <tr>
            <td>{props.post.title}</td>
            <td>{props.post.body}</td>
            <td>
                <Button className="badge badge-primary mr-2" href={`/posts/update/${props.post.id}`}>Update</Button>
                <Button className="badge badge-danger mr-2" onClick={() => deletePost(props.post.id)}>Delete</Button>
            </td>
        </tr>
    );
}

export default PostListItem;