import AuthHeader from "../features/Auth/AuthHeader"
import PrimaryButton from "../components/PrimaryButton"
import SwitchMessage from "../features/Auth/SwitchMessage"
import SignupInputs from "../features/Auth/SignupInputs"
import { useState } from "react"
import { signupUser } from "../features/Auth/service"

const Signup = () => {

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ""
  })

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signupUser(signUpData);

      console.log("Success:", response.data);

    } catch (error) {
      console.log("Sign up Error", error.response);
    }
  }

  return (
    <form
    onSubmit={onSubmit} 
    className='w-full p-6'
    >
      <AuthHeader state='signup'/>

      <SignupInputs signUpData={signUpData} setSignUpData={setSignUpData} />
      
      <PrimaryButton
        type="submit"  
        className='my-5'
      >
       Sign Up
      </PrimaryButton>
      <SwitchMessage state='signup'/>
    </form>
  )
}

export default Signup