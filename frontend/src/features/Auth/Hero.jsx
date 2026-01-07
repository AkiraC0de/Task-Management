import { useNavigate } from "react-router-dom"
import AuthIllustration from "../../components/illustrations/AuthIllustration"
import SecondaryButton from "../../components/SecondaryButton"
import QuouteCard from "./QuouteCard"

const Hero = ({state = "login"}) => {
  const navigate = useNavigate()
  return (
    <div className="p-4 relative hidden lg:flex flex-row md:flex-col gap-5 items-center overflow-hidden">
      <QuouteCard className="absolute top-45 left-10 z-10 p-5 pt-0 w-full max-w-lg"/>
      <AuthIllustration className="w-90 absolute top-0 right-0 z-8 md:w-100 md:flex hidden "/>
    </div>
  )
}
export default Hero