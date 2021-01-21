import React from 'react';
import { Switch, Route } from "react-router-dom";
import { UsersList } from '../../containers/users/UsersList';
import { UserAdd } from '../../containers/users/UserAdd';
import { UserUpdate} from '../../containers/users/UserUpdate';
import { PostsList } from '../../containers/posts/PostList';
import { PostAdd } from '../../containers/posts/PostAdd';
import { PostUpdate } from '../../containers/posts/PostUpdate';

export const HusaContent = () => {

    return (
        <>        
        <Switch>
          <Route exact path={["/", "/users"]} component={UsersList} />
          <Route exact path={"/users/add"} component={UserAdd} />
          <Route exact path={"/users/update/:id"} component={UserUpdate} />
          <Route exact path={"/posts"} component={PostsList} />
          <Route exact path={"/posts/add"} component={PostAdd} />
          <Route exact path={"/posts/update/:id"} component={PostUpdate} />
        </Switch> 
        </>
    );
}