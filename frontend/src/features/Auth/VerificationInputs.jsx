import { useState } from "react"

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
    <div className="flex justify-center gap-4">
     {code.map((digit, index) => (
        <input
          className="border w-10 text-center text-xl"
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
  )
}
export default VerificationInputs