// @desc Handle the change of an object input value
// @req the name must be set for the input that will be handled by this
export const handleChangeObject = (e, setData) => {
  const name = e.target.name;
  const value = e.target.value;

  setData(prev => (
    {
      ...prev,
      [name] : value
    }
  ))
}

// @desc this remove the error data to an error object of specific input name
// @req the name must be set for the input that will be handled by this
export const onChangeRemoveError = (e, error, setErrors) => {
  const name = e.target.name;

  if (error && error[name]) {
    setErrors(prev => {
      const newError = { ...prev };
      delete newError[name];
      return newError;
    });
  }
};