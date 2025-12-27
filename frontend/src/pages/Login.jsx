import AuthHeader from "../features/Auth/AuthHeader"
import LoginForm from "../features/Auth/LoginForm"
import SecondaryButton from "../components/SecondaryButton"
import AuthIllustration from "../components/illustrations/AuthIllustration"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 min-h-screen">

      <div className="relative flex flex-col gap-5 justify-end items-center">
        <div className="text-white text-center">
          <h1 className="font-bold text-3xl tracking-wide">New to GTask?</h1>
          <p className="font-medium w-100 my-2">Sign up now to master your workflow and manage group tasks with ease!</p>
          <SecondaryButton
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </SecondaryButton>
        </div>
        <AuthIllustration width={490}/>
       <div className="bg-[#42bded] w-400 h-400 rounded-full right-0 -bottom-40 absolute -z-10"></div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className='p-6 w-100'>
          <AuthHeader state='login'/>
          <LoginForm/>
          {/* <SwitchMessage state='login'/> */}
        </div>
      </div>

    </div>
  )
}

export default Login