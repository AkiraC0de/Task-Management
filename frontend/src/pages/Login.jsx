import AuthHeader from "../features/Auth/AuthHeader"
import LoginForm from "../features/Auth/LoginForm"
import Hero from "../features/Auth/Hero"
import SwitchForm from "../features/Auth/SwitchForm";

const PAGE_STATE = "login";

const Login = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:flex-row flex-1">
      <Hero state={PAGE_STATE}/>
      <div className="flex justify-center items-start">
        <div className='p-6 anim-fade-up w-full max-w-100'>
          <AuthHeader state={PAGE_STATE}/>
          <LoginForm/>
          <SwitchForm state={PAGE_STATE}/>
        </div>
      </div>
    </div>
  )
}

export default Login