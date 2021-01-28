import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HusaContent from '../husaContent';
import { HusaSidebar } from '../husaSidebar';
import { HusaRoutes } from '../husaRoutes';

export const HusaContainer = () => {
    return (      
        <Row>
          <Col xs={12} md={4} lg={2}>
            <HusaSidebar />
          </Col>
          <Col xs={12} md={6} lg={10}>
            <HusaContent >
              <HusaRoutes />
            </HusaContent>
          </Col>  
        </Row>    
    );
}