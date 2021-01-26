import React from 'react';
import { Navbar} from 'react-bootstrap';

export const HusaHeader = () => {
    return (      
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img src={process.env.PUBLIC_URL + '/homesusa-logo.png'} alt="logo" width={60} />
            {' '}            
          </Navbar.Brand>
          <Navbar.Text>
            Sitio administrativo
          </Navbar.Text>
          <Navbar.Collapse className="justify-content-end">                                 
              <Navbar.Text>
                Template
              </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
    );
}