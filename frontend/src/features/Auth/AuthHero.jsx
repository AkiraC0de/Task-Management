import { useNavigate } from "react-router-dom"
import AuthIllustration from "../../components/illustrations/AuthIllustration"
import SecondaryButton from "../../components/SecondaryButton"

const AuthBlobBackground = ({state = "login"}) => {
  const blobClasses = "bg-[#42bded] rounded-4xl max-md:bottom-0 md:-bottom-40 max-md:translate-x-1/2 absolute -z-10 max-md:right-1/2 max-md:w-full md:w-[400%]  md:rounded-full"
  const blobPositionClasses = state == "login" ? "md:right-0 " : "md:left-0"
  return (
    <div className={`${blobClasses} ${blobPositionClasses}`}></div>
  )
}

const AuthHero = ({state = "login"}) => {
  const navigate = useNavigate()
  return (
    <div className="max-md:h-40 md:flex-1 relative flex flex-row-reverse md:flex-col gap-5 justify-center items-center overflow-hidden">
      <div className="text-white text-center md:mt-auto">
        <h1 className="font-bold text-xl md:text-3xl tracking-wide">
          {state == "login" ? "New to GTask?" : "Already have an account?"}
        </h1>
        <p className="font-medium max-w-100 my-2 text-sm md:text-md">
          { 
            state == "login" 
            ? "Sign up now to master your workflow and manage group tasks with ease!" 
            : "Log in now to jump back into your workflow and sync up with your team."
          }
        </p>
        <SecondaryButton
          onClick={() => navigate(state == "login" ? "/signup" : "/login")}
        >
          {state == "login" ? "SIGN UP" : "LOG IN"}
        </SecondaryButton>
      </div>
      <AuthIllustration className="w-90 md:w-100 md:flex hidden "/>
      {/* <AuthBlobBackground state={state} /> */}
    </div>
  )
}
export default AuthHero