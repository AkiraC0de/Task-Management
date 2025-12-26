export const validateFields = (data) => {
  const errors = {};

  Object.keys(data).forEach((key) => {
    if (!data[key] || data[key].trim() === '') {
      errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors // sample return { name : "name is required", password : "password is required." }
  };
};