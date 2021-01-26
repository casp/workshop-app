import React from 'react';
import { Button } from 'react-bootstrap';

export interface HusaButtonProps {
  id: number,
  label: string,
  variant: string,
  type: string,
  onClick?: React.MouseEventHandler
}

export const HusaButton = (props: HusaButtonProps) => {
    return (      
        <Button key={props.id} variant={props.variant} type={props.type}>{props.label}</Button>
    );
}