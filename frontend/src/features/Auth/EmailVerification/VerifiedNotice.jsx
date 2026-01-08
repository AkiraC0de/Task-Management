import { ChevronRight, Verified } from "lucide-react"
import PrimaryButton from "../../../components/PrimaryButton"
import { Link } from "react-router-dom"
import { LOGIN_PAGE_LINK } from "../../../constants/pageLinkConstant"

const VerifiedNotice = ({email}) => {
  return (
    <div className="max-w-100 mt-14 px-5 py-14 flex items-center flex-col md:shadow-lg rounded-lg">
      <Verified className="text-primary" size={100}/>
      <h1 className="font-bold text-2xl text-primary mt-1.5">
        Welcome to Gtask!
      </h1>

      <p className="text-primary-text my-4 text-center">
        Your account <strong>{email}</strong> has been verified. You may now log in and start organizing your groups' task.
      </p>

      <PrimaryButton className="mt-2">
        <Link
          to={LOGIN_PAGE_LINK}
          replace 
          className="flex gap-1 text-sm items-center"
        >
          <span>Login now</span>
          <ChevronRight size={20}/>
        </Link>
      </PrimaryButton>
    </div>
  )
}
export default VerifiedNotice