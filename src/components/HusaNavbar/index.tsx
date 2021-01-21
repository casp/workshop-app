import React from 'react';
import { Navbar } from 'react-bootstrap';

export const HusaNavbar = () => {
    return (      
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img src={process.env.PUBLIC_URL + '/homesusa-logo.png'} alt="logo" width={60} />
            {' '}            
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">                                 
              <Navbar.Text>
                Workshop React + Typescript
              </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
    );
}