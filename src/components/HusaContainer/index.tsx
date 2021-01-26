import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HusaContent from '../husaContent';
import { HusaSidebar } from '../husaSidebar';
import { HusaRoutes } from '../husaRoutes';

export const HusaContainer = () => {
    return (      
        <Row>
          <Col xs={2}>
            <HusaSidebar />
          </Col>
          <Col>
            <HusaContent >
              <HusaRoutes />
            </HusaContent>
          </Col>  
        </Row>    
    );
}