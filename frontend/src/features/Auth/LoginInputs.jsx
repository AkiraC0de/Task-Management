import { Mail, Lock } from 'lucide-react'
import InputField from '../../components/InputField'
import { handleChangeObject } from '../../utils/handler'

const LoginInputs = ({loginData, loginDataHandler, errors}) => {
  return (
    <div className="mt-10 flex flex-col gap-3">
        <InputField 
          label='Email' 
          icon={<Mail/>} 
          type='email'
          value={loginData.email}
          name='email'
          onChange={(e) => handleChangeObject(e, loginDataHandler)}
          placeholder='Input your email'
          error={errors?.email}
        />

        <InputField 
          label='Password' 
          icon={<Lock/>} 
          value={loginData.password}
          onChange={(e) => handleChangeObject(e, loginDataHandler)}
          name='password'
          type='password'
          placeholder='Input your password'
          error={errors?.password}
        />
    </div>
  )
}

export default LoginInputs