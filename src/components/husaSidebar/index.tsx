import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HusaSidebar = () => {
    return (      
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to={"/posts"} className="nav-link">Posts</Link>
        <Link to={"/users"} className="nav-link">Users</Link>
      </Nav>
    );
}