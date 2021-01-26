import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const HusaContent = (props) => {
    const [currentPath, setCurrentPath] = useState<string>('');

    useEffect(() => {
        const url = props.location.pathname.substr(1, props.location.pathname.length -1);
        setCurrentPath(url);
    }, [props.location.pathname])

    return (
        <Card>
            <Card.Header as="h4">
              {currentPath}       
            </Card.Header>            
            <Card.Body>                 
                {props.children}                                 
            </Card.Body>
        </Card>    
    );
}

export default withRouter(HusaContent);