import { Mail, Lock } from 'lucide-react'
import InputField from '../../components/InputField'
import { useCallback } from 'react'

const LoginInputs = ({loginData, loginDataHandler}) => {
  //@desc On Change Handler for Input Field
  //@req the name must be set for the input that will be handled by this
  const onChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;

    loginDataHandler(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  return (
    <div className="mt-10 flex flex-col gap-3">
        <InputField 
          header='Email' 
          icon={<Mail/>} 
          type='email'
          value={loginData.email}
          name='email'
          onChange={onChange}
          placeholder='Input your email'
        />

        <InputField 
          header='Password' 
          icon={<Lock/>} 
          value={loginData.password}
          onChange={onChange}
          name='password'
          type='password'
          placeholder='Input your password'
        />
    </div>
  )
}

export default LoginInputs