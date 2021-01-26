import { Form } from 'react-bootstrap';

export interface HusaFormLabelProps {
  id: number,
  text: string,
}

export const HusaFormLabel = (props: HusaFormLabelProps) => {
    
    return (      
      <Form.Label>{props.text}</Form.Label>
    );
}