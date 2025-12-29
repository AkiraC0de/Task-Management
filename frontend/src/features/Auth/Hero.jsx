import { useNavigate } from "react-router-dom"
import AuthIllustration from "../../components/illustrations/AuthIllustration"
import SecondaryButton from "../../components/SecondaryButton"

const Hero = ({state = "login"}) => {
  const navigate = useNavigate()
  return (
    <div className="p-4 relative hidden lg:flex flex-row md:flex-col gap-5 items-center overflow-hidden">

      <div className="relative z-10 p-5 pt-0 w-full max-w-lg">
        <div className="bg-white p-8 pb-14 rounded-2xl border border-white/20 shadow-lg">
          
          <div className="text-blue-500 text-6xl font-serif mb-4 leading-none">“</div>
          
          <h1 className="text-3xl font-semibold text-primary-text leading-tight mb-2">
            The strength of the team is <span className="text-primary">each individual member.</span>
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-blue-500"></div>
            <p className="text-secondary-text font-medium tracking-wide uppercase text-sm">
              Phil Jackson
            </p>
          </div>

          <div className="absolute bottom-10 left-10 flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md"></div>
            <span className="text-primary-text font-bold text-xl tracking-tight">GTask</span>
          </div>
        </div>
        
        
      </div>
      <AuthIllustration className="w-90 absolute bottom-0 right-0 z-8 md:w-100 md:flex hidden "/>
    </div>
  )
}
export default Hero