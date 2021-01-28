import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const HusaContent = (props) => {
    const [currentPath, setCurrentPath] = useState<string>('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const pathName = (url: string) : string => {
        const name = url.substr(1, props.location.pathname.length -1).split("/");
        return name[0];
    }
    
    useEffect(() => {
        const url = pathName(props.location.pathname);
        setCurrentPath(url);
    }, [pathName, props.location.pathname])

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