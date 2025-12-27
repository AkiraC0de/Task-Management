export const getErrorMessage = (error) => {
    if(error.response){
      return error.response.data?.message || "Something went wrong with the request."
    } else if(error.request){
      return "Network Error: Please check your connection.";
    } else {
      return `Error: ${error.message}`
    }
}

export const getErrorSource = (error) => {
  return error.response?.data?.errorAt || null
}