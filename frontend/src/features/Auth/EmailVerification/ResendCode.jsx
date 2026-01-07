import { useEffect, useState, useCallback } from "react"
import { emailValidationResendCode } from "../service";
import { getErrorMessage } from "../../../utils/errorHandler";
import useAuth from "../../../hooks/useAuth";

const ResendCode = ({countdownSec = 0, setIsLoading, isLoading}) => {
  const [countdown, setCountdown] = useState(countdownSec);
  const {accessToken, setAccessToken} = useAuth()

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if(countdown > 0){
        setCountdown(prev => prev - 1);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000)

    return () => clearInterval(countdownInterval);
  }, [countdown])

  const handleResetCode = useCallback(async () => {
    if(countdown > 0) return
    setIsLoading(true);
    try {
      const {data} = await emailValidationResendCode(accessToken)
      setAccessToken(data.accessToken)
      setCountdown(countdownSec)

    } catch (error) {
      const message = getErrorMessage(error);
      console.log(message)
    } finally {
      setIsLoading(false)
    }
  }, [countdown, setCountdown])

  return (
    <div className="text-sm mt-4 text-secondary-text">
      <p className="flex gap-1">
        Didn't recieve a code?
        <button 
          className="text-secondary-tex font-semibold cursor-pointer"
          disabled={countdown > 0 || isLoading}
          type="button"
          onClick={handleResetCode}
        >
          Resend Code 
        </button>
        {
          countdown > 0 &&
          <>
            in <span className="font-semibold">{countdown}s</span>
          </>
        }
      </p>
    </div>
  )
}
export default ResendCode