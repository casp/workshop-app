import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import { HusaNavbar } from '../HusaNavbar/';
import { HusaContent } from '../HusaContent/';
import { HusaFooter } from '../HusaFooter/';

export const HusaContainer = () => {
    return (
      <Container fluid>
        <HusaNavbar />
        <Row>
          <Col>
            <Card>
            <Card.Header as="h4">
              Workshop        
            </Card.Header>            
            <Card.Body>                 
                <HusaContent />                                    
            </Card.Body>
        </Card>
          </Col>  
        </Row>           
        <HusaFooter />  
      </Container>
    );
}