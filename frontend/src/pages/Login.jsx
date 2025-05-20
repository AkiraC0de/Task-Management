import AuthHeader from "../features/Auth/AuthHeader"
import LoginInputs from "../features/Auth/LoginInputs"
import ForgotPassword from "../features/Auth/ForgotPassword"
import PrimaryButton from "../components/PrimaryButton"
import SwitchMessage from "../features/Auth/SwitchMessage"

const Login = () => {
  
  return (
    <form className='w-full p-6'>
      <AuthHeader state='login'/>

      <LoginInputs/>

      <ForgotPassword/>
      <PrimaryButton className='my-5'>
        Login
      </PrimaryButton>
      <SwitchMessage state='login'/>
    </form>
  )
}

export default Login