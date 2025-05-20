import AuthHeader from "../features/Auth/AuthHeader"
import PrimaryButton from "../components/PrimaryButton"
import SwitchMessage from "../features/Auth/SwitchMessage"
import SignupInputs from "../features/Auth/SignupInputs"

const Signup = () => {

  return (
    <form className='w-full p-6'>
      <AuthHeader state='signup'/>

      <SignupInputs/>
      
      <PrimaryButton className='my-5'>
        Verify
      </PrimaryButton>
      <SwitchMessage state='signup'/>
    </form>
  )
}

export default Signup