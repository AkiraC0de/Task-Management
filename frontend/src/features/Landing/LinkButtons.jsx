import { Link } from "react-router-dom"
import PrimaryButton from "../../components/PrimaryButton"
import { ChevronRight } from "lucide-react"
import SecondaryButton from "../../components/SecondaryButton"
import { SIGNUP_PAGE_LINK } from "../../constants/pageLinkConstant"

const LinkButtons = () => {
  return (
    <div className="flex gap-4 anim-fade-up-delayed">
      <PrimaryButton className="px-3 pr-2 text-sm">
        <Link 
          to={SIGNUP_PAGE_LINK}
          className="flex gap-1"
        >
          Get Started 
          <ChevronRight size={18}/>
        </Link>
      </PrimaryButton>
      <SecondaryButton className="px-3 text-sm">
        {/* THIS REQUIRED NEW PAGE IN THE FUTURE */}
        Why GTask?
      </SecondaryButton>
    </div>  
  )
}
export default LinkButtons