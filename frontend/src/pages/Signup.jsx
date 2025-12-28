import AuthHeader from "../features/Auth/AuthHeader"
import SignupForm from "../features/Auth/SignupForm"
import AuthHero from "../features/Auth/AuthHero"

const PAGE_STATE = "signup"

const Signup = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen">
      <div className="flex-6 md:flex-1 flex items-center">
        <div className='anim-fade-up w-full p-6 flex flex-col justify-center items-center'>
          <AuthHeader state={PAGE_STATE}/>
          <SignupForm/>
        </div>
      </div>
      <AuthHero state={PAGE_STATE}/>
    </div>
  )
}

export default Signup