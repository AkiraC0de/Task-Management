import LoginHeader from "./LoginHeader"
import LoginInputs from "./LoginInputs"
import InputField from "../../components/InputField"
import ForgotPassword from "./ForgotPassword"
import PrimaryButton from "../../components/PrimaryButton"
import SwitchMessage from "./SwitchMessage"
import { Mail, Lock } from 'lucide-react'

const Login = () => {
  return (
    <form className='w-full p-6'>
      <LoginHeader/>

      <LoginInputs>
        <InputField 
          header='Email' 
          icon={<Mail/>} 
          type='email'
          placeholder='Input your email'
        />

        <InputField 
          header='Password' 
          icon={<Lock/>} 
          type='password'
          placeholder='Input your password'
        />
      </LoginInputs>
      <ForgotPassword/>
      <PrimaryButton className='my-5'>
        Login
      </PrimaryButton>
      <SwitchMessage/>
    </form>
  )
}

export default Login