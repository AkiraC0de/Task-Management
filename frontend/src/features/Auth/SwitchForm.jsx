import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import SecondaryButton from "../../components/SecondaryButton"

const SwitchForm = ({state}) => {
  return (
    <div>
      <div className="flex items-center my-5">
        <hr className="flex-1 border-t border-gray-400" />
        <span className="px-3 text-gray-500 text-sm">Don't have an account?</span>
        <hr className="flex-1 border-t border-gray-400" />
      </div>
      <SecondaryButton
        className="w-full border-secondary-text text-secondary-text font-normal text-sm "
      >
        <Link 
          to="/signup"
          className="flex justify-center items-center"
        >
          Create an Account
          <ChevronRight size={20}/>
        </Link>
      </SecondaryButton>
    </div>
  )
}
export default SwitchForm