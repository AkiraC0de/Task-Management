import { useState } from 'react'
import { EyeOff, EyeIcon } from 'lucide-react';

const TOGGLE_BUTTON_COLOR = "#6a7282";

const TogglePasswordButton = ({showPassword, toggle}) => {
  return(
    <button 
      type='button'
      className='cursor-pointer text-gray-400'
      onClick={toggle}
    > 
      {showPassword ? <EyeOff/> : <EyeIcon/>}
    </button>
  )
}

const InputField = ({type = 'text', label, icon, error, ...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type == "password";
  // @desk add the ability to toggle between "text" and "password" input type if the type params is set as "password"
  const inputType = isPasswordType && showPassword ? "text" : type; 
  
  return (
      <div>
        {label && <label className='ml-2 font-semibold text-md'>{label}</label>}
        <div className={`${error ? "ring-2 ring-red-400" : "focus-within:ring-2 focus-within:ring-blue-400"} flex items-center border border-gray-300 rounded-4xl p-4 shadow-sm gap-2`}>
          <span className="text-gray-400">{icon}</span>
          <input
            type={inputType}
            {...props}
            className="outline-none w-full bg-transparent text-md font-semibold text-gray-500 placeholder:text-gray-400"
          />
          { 
            isPasswordType && 
            <TogglePasswordButton 
              showPassword={showPassword} 
              toggle={() => setShowPassword(prev => !prev)}
            /> 
          }   
        </div>
        {error && <span className='text-red-500 text-xs italic'>{error}</span>}
      </div>
  )
}

export default InputField