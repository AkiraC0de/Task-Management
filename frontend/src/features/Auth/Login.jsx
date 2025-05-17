import LoginHeader from "../LoginHeader"
import LoginInputs from "./LoginInputs"
import InputField from "../../components/InputField"
import ForgotPassword from "./ForgotPassword"
import { Mail, Lock } from 'lucide-react'

const Login = () => {
  return (
    <div className='w-full p-5'>
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
    </div>
  )
}

export default Login