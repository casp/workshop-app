import React from 'react';
import { Form } from 'react-bootstrap';
import { HusaButton, HusaButtonProps } from '../husaButton';
import { HusaFormGroup, HusaFormGroupProps } from '../husaFormGroup';

export interface HusaFormProps {
  items: HusaFormGroupProps[],
  buttons: HusaButtonProps[],
  onSubmit?: React.FormEventHandler<HTMLFormElement> 
}

export const HusaForm = (props: HusaFormProps) => {
    
    return (      
        <Form onSubmit={props.onSubmit}>
          { props.items.map(item => (
              <HusaFormGroup {...item} key={item.id} />)
            )
          } 
          {
            props.buttons.map(btn => (
              <HusaButton {...btn} key={btn.label}/>)
            )
          }         
        </Form>
    );
}