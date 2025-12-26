import AuthHeader from "../features/Auth/AuthHeader"
import SwitchMessage from "../features/Auth/SwitchMessage"
import LoginForm from "../features/Auth/LoginForm"

const Login = () => {
  return (
    <div className='w-full p-6'>
      <AuthHeader state='login'/>
      <LoginForm/>
      <SwitchMessage state='login'/>
    </div>
  )
}

export default Login