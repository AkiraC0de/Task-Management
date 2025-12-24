export const getErrorMessage = (error) => {
    if(error.response){
      return `Error ${error.response.status} : ${error.response.data?.message}`;
    } else if(error.request){
      return "Network Error: Please check your connection.";
    } else {
      return `Error: ${error.message}`
    }
}