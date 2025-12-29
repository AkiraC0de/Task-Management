import { memo } from "react"

const PrimaryButton = ({className, onClick,  type = 'button', disabled = false, children}) => {
  return (
    <button 
        className={`font-medium tracking-widest px-8 py-3 rounded-xl cursor-pointer bg-[#42bdec] text-white  ${className}`}
        onClick={onClick || function(){}}
        type={type}
        disabled={disabled}
    >
        {children}
    </button>
  )
}

export default memo(PrimaryButton)