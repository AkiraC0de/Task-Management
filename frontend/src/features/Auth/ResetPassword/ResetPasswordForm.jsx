import { useState } from "react"
import InputField from "../../../components/InputField"
import { Lock } from "lucide-react"
import PrimaryButton from "../../../components/PrimaryButton";
import Spinner from "../../../components/Spinner";
import { trimObject, validateResetPasswordForm } from "../../../utils/formValidation";
import { RESET_PASSWORD_DATA_DEFAULT } from "../../../constants/authConstant";

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState(RESET_PASSWORD_DATA_DEFAULT);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({})

    const cleanPassword = trimObject(newPassword);
    setNewPassword(cleanPassword);

    const validation = validateResetPasswordForm(cleanPassword);
    if(!validation.isValid){
      setErrors(validation.errors)
      console.log(errors)
      return
    }

    console.log("SUBMITTED")

  }

  const handleOnChange = (e) => {
    setErrors(prev => ({...prev, [e.target.name] : ""}))
    setNewPassword(prev => ({...prev, [e.target.name] : e.target.value}))
  }

  return (
    <form
      onSubmit={handleSubmit} 
      className="mt-4 space-y-4 w-full"
    >
      <InputField 
        label="New Password"
        icon={<Lock/>} 
        value={newPassword.password}
        onChange={handleOnChange}
        name='password'
        type='password'
        placeholder='••••••••'
        error={errors.password}
      />
      <InputField 
        label="Confirm Password"
        icon={<Lock/>} 
        value={newPassword.confirmPassword}
        onChange={handleOnChange}
        name='confirmPassword'
        type='password'
        placeholder='••••••••'
        error={errors.confirmPassword}
      />
      <PrimaryButton
        type="submit"
        disabled={isLoading}
        className="w-full mt-2"
      >
        {isLoading ? <Spinner/> : "Submit"}
      </PrimaryButton>
    </form>
  )
}
export default ResetPasswordForm