import { Form } from 'react-bootstrap';

export interface HusaFormControlProps {
  id: number,
  type: string,
  name: string,
  placeholder: string,
  value?: string,
  autocomplete: string,
  onchange?: React.ChangeEventHandler
}

export const HusaFormControl = (props: HusaFormControlProps) => {

    console.log(props.onchange as React.ChangeEventHandler);
   
    return (      
        <Form.Control 
          type={props.type} 
          name={props.name} 
          placeholder={props.placeholder} 
          autoComplete={props.autocomplete} 
          onChange={props.onchange as React.ChangeEventHandler }/>
    );
}