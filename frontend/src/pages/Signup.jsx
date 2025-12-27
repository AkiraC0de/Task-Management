import AuthHeader from "../features/Auth/AuthHeader"
import SwitchMessage from "../features/Auth/SwitchMessage"
import SignupForm from "../features/Auth/SignupForm"

const Signup = () => {

  return (
    <div className='w-full p-6'>
      <AuthHeader state='signup'/>
      <SignupForm/>
      <SwitchMessage state='signup'/>
    </div>
  )
}

export default Signup