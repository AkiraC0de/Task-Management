import { Mail, Lock } from 'lucide-react'
import InputField from '../../components/InputField'
import { handleChangeObject, onChangeRemoveError } from '../../utils/handler'

const LoginInputs = ({loginData, loginDataHandler, errors, errorsHandler}) => {
  const handleChange = (e) => {
    handleChangeObject(e, loginDataHandler);
    onChangeRemoveError(e, errors, errorsHandler);
  }
  return (
    <div className="flex flex-col gap-4">
        <InputField 
          icon={<Mail/>} 
          type='email'
          value={loginData.email}
          name='email'
          onChange={handleChange}
          placeholder='Email'
          error={errors?.email}
        />

        <InputField 
          icon={<Lock/>} 
          value={loginData.password}
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='Password'
          error={errors?.password}
        />
    </div>
  )
}

export default LoginInputs