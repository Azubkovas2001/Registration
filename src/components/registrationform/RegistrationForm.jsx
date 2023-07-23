import React, { useState } from 'react';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { StyledDiv, StyledInput, StyledIcon, StyledForm, StyledLabel, StyledButton, StyledSpan } from './RegistrationForm.style';
const RegistrationForm = ({ onSubmit, validateForm }) => {
  const initialFormData = {
    name: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateForm(formData);

    if (validation.isFormValid) {
      onSubmit({ formData, validation });
      setFormData(initialFormData);
      setErrors(null);
    } else {
      setErrors(validation.errors);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledDiv>
          <StyledIcon icon={faUser} />
          <StyledInput
            type="text"
            name="name"
            placeholder="Joy Shaheb"
            value={formData.name}
            onChange={handleChange}
          />
        </StyledDiv>
        {errors && !errors.isNameValid && (
          <StyledSpan>Error: Name must be at least 7 characters</StyledSpan>
        )}
      </div>
      <div>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledDiv>
          <StyledIcon icon={faEnvelope} />
          <StyledInput
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </StyledDiv>
        {errors && !errors.isEmailValid && (
          <StyledSpan>Error: Invalid Email Address</StyledSpan>
        )}
      </div>
      <div>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledDiv>
          <StyledIcon icon={faLock} />
          <StyledInput
            type="password"
            name="password"
            placeholder="●●●●●●●"
            value={formData.password}
            onChange={handleChange}
          />
        </StyledDiv>
        {errors && !errors.isPasswordValid && (
          <StyledSpan>
            Error: Password must contain at least one letter and numbers, and be at least 6 characters
          </StyledSpan>
        )}
      </div>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default RegistrationForm;
