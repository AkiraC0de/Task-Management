import { memo } from "react"

const PrimaryButton = ({className, onClick,  type = 'button', children}) => {
  return (
    <button 
        className={`tezt-lg font-bold tracking-widest p-4 w-full rounded-xl bg-[#42bdec] text-white  ${className}`}
        onClick={onClick || function(){}}
        type={type}
    >
        {children}
    </button>
  )
}

export default memo(PrimaryButton)