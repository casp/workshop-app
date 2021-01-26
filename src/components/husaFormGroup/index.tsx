import { Form } from 'react-bootstrap';
import { HusaFormLabel, HusaFormLabelProps } from '../husaFormLabel';
import { HusaFormControl, HusaFormControlProps } from '../husaFormControl';

export interface HusaFormGroupProps {
  id: number,
  controlId: string,
  label: HusaFormLabelProps,
  input: HusaFormControlProps,  
}

export const HusaFormGroup = (props: HusaFormGroupProps) => {
    return (      
        <Form.Group controlId={props.controlId}>
          <HusaFormLabel {...props.label} key={props.label.text}/>
          <HusaFormControl {...props.input} key={props.input.name} />          
        </Form.Group>
    );
}