import { Mail, Lock, UserPen } from 'lucide-react'
import InputField from '../../components/InputField'
import { handleChangeObject } from '../../utils/handler'

const SignupInputs = ({children, signUpData, signUpDataHandler, errors}) => {
  return (
    <div className=" flex flex-col gap-3">
        <div className='flex gap-3'>
          <InputField 
            label="First Name"
            name="firstname"
            value={signUpData.firstname}
            error={errors?.firstname}
            onChange={(e) => handleChangeObject(e, signUpDataHandler)}
            type='text'
            placeholder='John'
          />
          <InputField 
            label="Last Name"
            name="lastname"
            value={signUpData.lastname}
            error={errors?.lastname}
            onChange={(e) => handleChangeObject(e, signUpDataHandler)}
            type='text'
            placeholder='Dela Cruz'
          />
        </div>

        <InputField 
          icon={<Mail/>}
          label="Email"
          name="email" 
          value={signUpData.email}
          error={errors?.email}
          onChange={(e) => handleChangeObject(e, signUpDataHandler)}
          type='email'
          placeholder='john@example.com'
        />

        <InputField 
          icon={<Lock/>} 
          label="Password"
          name="password" 
          value={signUpData.password}
          error={errors?.password}
          onChange={(e) => handleChangeObject(e, signUpDataHandler)}
          type='password'
          placeholder='••••••••'
        />

        <InputField 
          icon={<Lock/>} 
          label="Confirm Password"
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