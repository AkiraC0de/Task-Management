import { Mail, Lock, UserPen } from 'lucide-react'
import InputField from '../../components/InputField'

const SignupInputs = ({children, signUpData, setSignUpData}) => {

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignUpData(prev => (
      {
        ...prev,
        [name] : value
      }
    ))
  }

  return (
    <div className="mt-10 flex flex-col gap-3">
        <InputField 
          header='Fullname' 
          icon={<UserPen/>} 
          name="name"
          value={signUpData.name}
          onChange={onChange}
          type='text'
          placeholder='Input your full name'
        />

        <InputField 
          header='Email' 
          icon={<Mail/>}
          name="email" 
          value={signUpData.email}
          onChange={onChange}
          type='email'
          placeholder='Input your email'
        />

        <InputField 
          header='Password' 
          icon={<Lock/>} 
          name="password" 
          value={signUpData.password}
          onChange={onChange}
          type='password'
          placeholder='Input your password'
        />

        <InputField 
          header='Confirm Password' 
          icon={<Lock/>} 
          name="password" 
          value={signUpData.password}
          onChange={onChange}
          type='password'
          placeholder='Confirm your password'
        />
    </div>
  )
}

export default SignupInputs