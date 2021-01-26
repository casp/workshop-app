import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { HusaButton, HusaButtonProps } from '../../components/HusaButton';


const initialValues : HusaButtonProps = {
  id: 0,
  label: "",
  variant: "",
  type: "",
  onClick: ""
}

describe("<HusaButton />", () => {
  const { findByTestId  } = render(<HusaButton {...initialValues} />);
  const button = await findByTestId("button");
  expect (button).toHaveProperty({label: ""});
});
