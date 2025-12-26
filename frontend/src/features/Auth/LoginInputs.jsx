import { Mail, Lock } from 'lucide-react'
import InputField from '../../components/InputField'
import { handleChangeObject, onChangeRemoveError } from '../../utils/handler'

const LoginInputs = ({loginData, loginDataHandler, errors, errorsHandler}) => {
  const handleChange = (e) => {
    handleChangeObject(e, loginDataHandler);
    onChangeRemoveError(e, errors, errorsHandler);
  }
  return (
    <div className="mt-10 flex flex-col gap-3">
        <InputField 
          label='Email' 
          icon={<Mail/>} 
          type='email'
          value={loginData.email}
          name='email'
          onChange={handleChange}
          placeholder='Input your email'
          error={errors?.email}
        />

        <InputField 
          label='Password' 
          icon={<Lock/>} 
          value={loginData.password}
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='Input your password'
          error={errors?.password}
        />
    </div>
  )
}

export default LoginInputs