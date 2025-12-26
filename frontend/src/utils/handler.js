
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