const Validation = ({ render }) => {
  const validateForm = (formData) => {
    const { name, email, password } = formData;

    const isNameValid = name.length >= 7;

    const isEmailValid = email.includes('@');

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    const isPasswordValid = passwordRegex.test(password);

    const isFormValid = isNameValid && isEmailValid && isPasswordValid;

    const errors = {
      isNameValid,
      isEmailValid,
      isPasswordValid,
    };

    return {
      isFormValid,
      errors,
    };
  };

  return render(validateForm);
};

export default Validation;

