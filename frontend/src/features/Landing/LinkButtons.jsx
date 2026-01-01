import { Link } from "react-router-dom"
import PrimaryButton from "../../components/PrimaryButton"
import { ChevronRight } from "lucide-react"
import SecondaryButton from "../../components/SecondaryButton"

const LinkButtons = () => {
  return (
    <div className="flex gap-4">
      <PrimaryButton className="px-3 pr-2 text-sm">
        <Link 
          to="/signup"
          className="center gap-1"
        >
          Get Started
          <ChevronRight size={18}/>
        </Link>
      </PrimaryButton>
      <SecondaryButton className="px-3 text-sm">
        Why GTask?
      </SecondaryButton>
    </div>  
  )
}
export default LinkButtons