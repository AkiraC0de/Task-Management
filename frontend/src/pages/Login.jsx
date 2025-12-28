import AuthHeader from "../features/Auth/AuthHeader"
import LoginForm from "../features/Auth/LoginForm"
import SecondaryButton from "../components/SecondaryButton"
import AuthIllustration from "../components/illustrations/AuthIllustration"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      <div className="flex-1 relative flex flex-row-reverse md:flex-col gap-5 justify-center items-center overflow-hidden">
        <div className="text-white text-center md:mt-auto">
          <h1 className="font-bold text-xl md:text-3xl tracking-wide">New to GTask?</h1>
          <p className="font-medium max-w-100 my-2 text-sm md:text-md">Sign up now to master your workflow and manage group tasks with ease!</p>
          <SecondaryButton
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </SecondaryButton>
        </div>
        <AuthIllustration className="w-90 md:w-100 md:flex hidden "/>
       <div className="bg-[#42bded] w-full md:w-400 h-400 rounded-4xl md:rounded-full max-md:bottom-0 max-md:translate-x-1/2 max-md:right-1/2 md:right-0 md:-bottom-40 absolute -z-10"></div>
      </div>

      <div className="flex-6 md:flex-1 flex justify-center items-center w-full">
        <div className='p-6 w-100'>
          <AuthHeader state='login'/>
          <LoginForm/>
        </div>
      </div>

    </div>
  )
}

export default Login