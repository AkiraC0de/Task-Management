import { useState } from "react"
import PrimaryButton from "../../components/PrimaryButton";
import { ChevronRight } from "lucide-react"

const CODE_LENGTH = 6

const VerificationInputs = () => {
  const [code, setCode] = useState(new Array(CODE_LENGTH).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Only allow numbers

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
    <div>
      <div className="flex justify-center gap-3 my-6">
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
      <PrimaryButton 
        className="w-full flex justify-center items-center gap-2"
      >
        VERIFY
        <ChevronRight size={20}/>
      </PrimaryButton>
    </div>
  )
}
export default VerificationInputs