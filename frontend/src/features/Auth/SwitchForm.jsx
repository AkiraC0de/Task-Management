import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import SecondaryButton from "../../components/SecondaryButton"

const SwitchForm = ({state = "login"}) => {
  return (
    <div>
      <div className="flex items-center my-5">
        <hr className="flex-1 border-t border-gray-400" />
        <span className="px-3 text-gray-500 text-sm">
          {state == "login" ? "Don't have an account?" : "Already have an account?"}
        </span>
        <hr className="flex-1 border-t border-gray-400" />
      </div>
      <SecondaryButton
        className="w-full border-secondary-text text-secondary-text font-normal text-sm "
      >
        <Link 
          to={state == "login" ? "/signup" : "/login"}
          className="flex justify-center items-center"
        >
          {state == "login" ? "Create an Account" : "Login to my account"}
          <ChevronRight size={20}/>
        </Link>
      </SecondaryButton>
    </div>
  )
}
export default SwitchForm