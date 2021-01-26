import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { HusaCopyright } from '../husaCopyright';

export const HusaFooter = () => {
    return (    
        <Row>
            <Col>
                <HusaCopyright />
            </Col>
        </Row>  
        
    );
}