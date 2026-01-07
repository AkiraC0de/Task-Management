import { Mail, Lock } from 'lucide-react'
import InputField from '../../../components/InputField'

const LoginInputs = ({loginData, errors, InputOnchangeHandler}) => {
  return (
    <div className="flex flex-col gap-4">
        <InputField 
          icon={<Mail/>} 
          type='email'
          label="Email"
          value={loginData.email}
          name='email'
          onChange={InputOnchangeHandler}
          placeholder='john@example.com'
          error={errors?.email}
        />

        <InputField 
          label="Password"
          icon={<Lock/>} 
          value={loginData.password}
          onChange={InputOnchangeHandler}
          name='password'
          type='password'
          placeholder='••••••••'
          error={errors?.password}
        />
    </div>
  )
}

export default LoginInputs