import { Mail, Lock } from 'lucide-react'
import InputField from '../../../components/InputField'

const SignupInputs = ({signUpData, InputOnchangeHandler, errors}) => {
  return (
    <div className=" flex flex-col gap-3">
        <div className='flex gap-3'>
          <InputField 
            label="First Name"
            name="firstName"
            value={signUpData.firstName}
            error={errors?.firstName}
            onChange={InputOnchangeHandler}
            type='text'
            placeholder='John'
          />
          <InputField 
            label="Last Name"
            name="lastName"
            value={signUpData.lastName}
            error={errors?.lastName}
            onChange={InputOnchangeHandler}
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
          onChange={InputOnchangeHandler}
          type='email'
          placeholder='john@example.com'
        />

        <InputField 
          icon={<Lock/>} 
          label="Password"
          name="password" 
          value={signUpData.password}
          error={errors?.password}
          onChange={InputOnchangeHandler}
          type='password'
          placeholder='••••••••'
        />

        <InputField 
          icon={<Lock/>} 
          label="Confirm Password"
          name="confirmPassword" 
          error={errors?.confirmPassword}
          value={signUpData.confirmPassword}
          onChange={InputOnchangeHandler}
          type='password'
          placeholder='Confirm your password'
        />
    </div>
  )
}

export default SignupInputs