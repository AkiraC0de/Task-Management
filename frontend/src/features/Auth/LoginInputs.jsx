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
          label="Email"
          value={loginData.email}
          name='email'
          onChange={handleChange}
          placeholder='john@example.com'
          error={errors?.email}
        />

        <InputField 
          label="Password"
          icon={<Lock/>} 
          value={loginData.password}
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='••••••••'
          error={errors?.password}
        />
    </div>
  )
}

export default LoginInputs