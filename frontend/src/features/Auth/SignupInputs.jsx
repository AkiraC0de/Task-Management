import { Mail, Lock, UserPen } from 'lucide-react'
import InputField from '../../components/InputField'
import { handleChangeObject } from '../../utils/handler'

const SignupInputs = ({children, signUpData, signUpDataHandler, errors}) => {
  return (
    <div className="mt-10 flex flex-col gap-3">
        <InputField 
          label='Fullname' 
          icon={<UserPen/>} 
          name="name"
          value={signUpData.name}
          error={errors?.name}
          onChange={(e) => handleChangeObject(e, signUpDataHandler)}
          type='text'
          placeholder='Input your full name'
        />

        <InputField 
          label='Email' 
          icon={<Mail/>}
          name="email" 
          value={signUpData.email}
          error={errors?.email}
          onChange={(e) => handleChangeObject(e, signUpDataHandler)}
          type='email'
          placeholder='Input your email'
        />

        <InputField 
          label='Password' 
          icon={<Lock/>} 
          name="password" 
          value={signUpData.password}
          error={errors?.password}
          onChange={(e) => handleChangeObject(e, signUpDataHandler)}
          type='password'
          placeholder='Input your password'
        />

        <InputField 
          label='Confirm Password' 
          icon={<Lock/>} 
          name="confirmPassword" 
          error={errors?.confirmPassword}
          value={signUpData.confirmPassword}
          onChange={(e) => handleChangeObject(e, signUpDataHandler)}
          type='password'
          placeholder='Confirm your password'
        />
    </div>
  )
}

export default SignupInputs