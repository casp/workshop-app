import React from 'react';
import { Card } from 'react-bootstrap';

export const HusaCopyright = () => {
    return (
      <Card>
        <Card.Body className="text-center">
          {'Copyright © '}
          <Card.Link href="https://www.homesusa.com">HomesUSA</Card.Link> 
            {' '} {new Date().getFullYear()} {'.'}
          </Card.Body>
      </Card>   
    );
}