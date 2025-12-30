import { ArrowRight, RewindIcon } from "lucide-react"
import PageNotFound from "../components/illustrations/PageNotFound"
import SecondaryButton from "../components/SecondaryButton"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen pb-16">
      <PageNotFound className="w-40"/>
      <h1 className="text-primary text-4xl font-bold">Opps!</h1>
      <h2 className="text-primary-text font-semibold text-xl mb-4">404 Page not found</h2>
      <SecondaryButton>
        <Link 
          to="/"
          className="flex items-center gap-2"
        >
          <RewindIcon size={18}/>
          Back to home
        </Link>
      </SecondaryButton>
    </main>
  )
}
export default NotFound