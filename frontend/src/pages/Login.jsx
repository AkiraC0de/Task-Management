import AuthHeader from "../features/Auth/AuthHeader"
import LoginForm from "../features/Auth/LoginForm"
import AuthHero from "../features/Auth/AuthHero"

const PAGE_STATE = "login";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <AuthHero state={PAGE_STATE}/>
      <div className="flex-6 md:flex-1 flex justify-center items-center w-full">
        <div className='p-6 anim-fade-up max-w-120'>
          <AuthHeader state={PAGE_STATE}/>
          <LoginForm/>
        </div>
      </div>
    </div>
  )
}

export default Login