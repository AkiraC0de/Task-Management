import { Mail, Lock, UserPen } from 'lucide-react'
import InputField from '../../components/InputField'

const SignupInputs = ({children}) => {
  return (
    <div className="mt-10 flex flex-col">
        <InputField 
          header='Fullname' 
          icon={<UserPen/>} 
          type='email'
          placeholder='Input yoor full name'
        />

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
    </div>
  )
}

export default SignupInputs