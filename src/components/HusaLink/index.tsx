import React from 'react';
import { Navbar } from 'react-bootstrap';

export const HusaLink = () => {
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img src={process.env.PUBLIC_URL + '/homesusa-logo.png'} alt="logo" width={60} />
          </Navbar.Brand>
        </Navbar>
    );
}