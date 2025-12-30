import AuthHeader from "../features/Auth/AuthHeader"
import SignupForm from "../features/Auth/SignupForm"
import Hero from "../features/Auth/Hero"
import SwitchForm from "../features/Auth/SwitchForm"

const PAGE_STATE = "signup"

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:flex-row flex-1">
      <Hero/>
      <div className="flex items-center justify-center">
        <div className='anim-fade-up w-full max-w-110 p-6'>
          <AuthHeader state={PAGE_STATE}/>
          <SignupForm/>
          <SwitchForm state={PAGE_STATE}/>
        </div>
      </div>
    </div>
  )
}

export default Signup