// RightSide.js
import React, { useState } from 'react';
import { RightSideContainer, StyledHeading, StyledContent, StyledAnchor, StyledSecondHeading } from './Form.style';
import RegistrationForm from '../registrationform/RegistrationForm';
import Validation from '../Validation';
import Button from '../button/Button';

export default function RightSide() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = ({ formData, validation }) => { 
    if (validation.isFormValid) {
      console.log('Form data:', formData);
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
    }
  };

  return (
    <RightSideContainer>
      <StyledHeading>Get Started</StyledHeading>
      <StyledContent>Already have an account?</StyledContent>
      <StyledAnchor href="/">Log in</StyledAnchor>
      <Button text="sign up" />
      <StyledSecondHeading>Or</StyledSecondHeading>
      <Validation
        render={(validateForm) => (
          <RegistrationForm onSubmit={handleFormSubmit} validateForm={validateForm} formSubmitted={formSubmitted} />
        )}
      />
    </RightSideContainer>
  );
}
