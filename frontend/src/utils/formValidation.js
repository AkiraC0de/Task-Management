
// @desc This func validate the input fields data if there are empty string within the data.
// Drawbacks : this cannot validate if the data type is a boolean.
export const validateFields = (data) => {
  const errors = {};

  Object.keys(data).forEach((key) => {
    if (String(data[key]).trim() === '') {
      errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors // sample return { name : "name is required", password : "password is required." }
  };
};

export const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.toString().trim());
};

export const isPasswordValid = (password) => {
  // This pattern requires: at least one uppercase letter, one lowercase letter, one number, and a minimum of 8 characters.
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  return passwordRegex.test(password)
}

export const validateSignUpForm = (formData) => {
  let errors = {}
  
  // Validate if the are empty input field
  const fieldValidation = validateFields(formData);
  if(!fieldValidation.isValid){
    errors = {...errors, ...fieldValidation.errors}
  }

  // Validate the email format only if the email data is NOT empty string
  if(!fieldValidation.errors?.email && !isEmailValid(formData?.email)){
    errors = {...errors, email : "Invalid email format."}
  }

  // Validate the password only if it has not had an errro with fieldValidation
  if(!fieldValidation.errors?.password && !isPasswordValid(formData?.password)){
    errors = {...errors, password : "Password requires a minimum length of 8 characters, with at least one uppercase letter, one lowercase letter, and one digit."}
  }

  // Validate if the password matched confirmPassword
  const isPasswordMatched = formData?.confirmPassword === formData?.password;
  if(!fieldValidation.errors?.confirmPassword && !isPasswordMatched){
    errors = {...errors, confirmPassword : "Password does not match."}
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors // sample return { name : "name is required", password : "password is required." }
  };
}

export const validateVerificationCode = (arrCode, reqCodeLength) => {
  let code = "";
  arrCode.forEach(value => code += value);

  if(code.length !== reqCodeLength){
    return {
      isValid: false,
      message: "Please input 6 digit code."
    }
  }

  return {
    isValid: true,
    code
  }
}