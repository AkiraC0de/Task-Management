import { useState } from "react"
import PrimaryButton from "../../components/PrimaryButton";
import { ChevronRight } from "lucide-react"
import { validateVerificationCode } from "../../utils/formValidation";
import { useNavigate, useParams } from "react-router-dom";
import { validateUserEmail } from "./service";
import { getErrorMessage } from "../../utils/errorHandler";
import Spinner from "../../components/Spinner";
import { LOGIN_PAGE_LINK } from "../../constants/pageLinkConstant";
import ResendCode from "./ResendCode";

const CODE_LENGTH = 6;
const RESEND_CODE_COOLDOWN = 120; // 120 seconds

const VerificationForm = () => {
  const navigate = useNavigate()
  const {userId} = useParams()
  const [code, setCode] = useState(new Array(CODE_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verify the inputs
    const codeInput = validateVerificationCode(code, CODE_LENGTH);
    if(!codeInput.isValid){
      setError(codeInput.message);
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await validateUserEmail({
        token : codeInput.code,
        userId
      })

      //REQURIES AN UPDATE
      console.log(response)

      navigate(LOGIN_PAGE_LINK, {replace : true});
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Only allow numbers
    if (value === " ") return // do not allow space

    const newCode = [...code];
    // Take only the last character (prevents multiple digits in one box)
    newCode[index] = value.substring(value.length - 1);
    setCode(newCode); 

    // Focus to the next input
    if(value && index < CODE_LENGTH - 1){
      e.target.nextSibling.focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if(e.key === "Backspace" && !code[index] && index > 0){
       e.target.previousSibling.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex justify-center gap-3 my-4">
      {code.map((digit, index) => (
          <input
            className="border-2 border-secondary-text/50 focus:outline-3 focus:outline-primary w-10 text-center text-xl h-14 rounded-lg"
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
      <div className="w-full flex flex-col items-center">
        {error && <p className="text-red-400 text-xs pb-4 font-medium">{error}</p>}
        <PrimaryButton 
          className="w-50 flex pr-2 justify-center items-center gap-1"
          type="submit"
          disabled={isLoading}
        >
          {isLoading 
            ? <Spinner/> 
            : <>
                VERIFY
                <ChevronRight size={20}/>
              </>
          }
        </PrimaryButton>
        <ResendCode countdownSec={RESEND_CODE_COOLDOWN}/>
      </div>
    </form>
  )
}
export default VerificationForm