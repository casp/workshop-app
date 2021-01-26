import React from 'react';
import { Container } from 'react-bootstrap';
import { HusaHeader, HusaContainer, HusaFooter } from './components';
import { PostContext, UserContext } from './contexts';

function App() {
  return (
        <PostContext>   
          <UserContext>
            <Container fluid>
              <HusaHeader />
              <HusaContainer />       
              <HusaFooter />          
            </Container> 
          </UserContext>          
        </PostContext>
  );
}

export default App;
