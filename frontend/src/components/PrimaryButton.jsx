import { memo } from "react"

const PrimaryButton = ({className = "", onClick,  type = 'button', disabled = false, children}) => {
  return (
    <button 
        className={`font-medium tracking-widest rounded-lg px-4 py-2 cursor-pointer bg-primary text-white hover:scale-103 transition-all duration-300 ${className}`}
        onClick={onClick || function(){}}
        type={type}
        disabled={disabled}
    >
        {children}
    </button>
  )
}

export default memo(PrimaryButton)