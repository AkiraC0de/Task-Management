import InputField from "../../../components/InputField"
import PrimaryButton from "../../../components/PrimaryButton"
import { Mail } from "lucide-react"

const ForgotPasswordForm = () => {
  return (
    <form className="mt-6 w-full">
      <InputField
        icon={<Mail/>}
        type="email"
        className="w-full"
      />
      <PrimaryButton
        type="submit"
      >
        Submit
      </PrimaryButton>
    </form>
  )
}
export default ForgotPasswordForm