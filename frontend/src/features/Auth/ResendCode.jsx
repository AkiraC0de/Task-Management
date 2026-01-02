import { useEffect, useState } from "react"

const ResendCode = ({countdownSec = 0}) => {
  const [countdown, setCountdown] = useState(countdownSec);

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

  return (
    <div className="text-sm mt-4 text-secondary-text">
      <p className="flex gap-1">
        Didn't recieve a code?
        <button 
          className="text-secondary-text font-semibold cursor-pointer"
          disabled={countdown === 0}
          type="button"
        >
          Resend Code 
        </button>
        in <span className="font-semibold">{countdown}s</span>
      </p>
    </div>
  )
}
export default ResendCode