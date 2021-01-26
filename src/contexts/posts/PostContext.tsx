import React, { createContext } from 'react';
import { IPostContext } from './IPostContext';
import { Post } from '../../models/Post';
import { GetAll } from '../../services/GenericService';
import { POST_URL } from '../../resources';

export const PostContext = createContext<IPostContext>({
  posts: []
});

const PostProvider = (props: any) => {
  const posts = GetAll<Post>(POST_URL);

  return (
    <PostContext.Provider value={{ posts }}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostProvider;