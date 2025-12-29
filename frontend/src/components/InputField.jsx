import { useState } from 'react'
import { EyeOff, EyeIcon } from 'lucide-react';

const TOGGLE_BUTTON_COLOR = "#6a7282";

const TogglePasswordButton = ({showPassword, toggle}) => {
  return(
    <button 
      type='button'
      className='cursor-pointer text-secondary-text'
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
        {label && <label className='mb-2 ml-2 font-medium text-sm text-primary-text'>{label}</label>}
        <div className={`${error ? "ring-2 ring-red-400" : "focus-within:ring-2 focus-within:ring-primary"} flex items-center border border-gray-300 rounded-xl p-3 shadow-sm gap-2`}>
          <span className="text-secondary-text/50">{icon}</span>
          <input
            type={inputType}
            {...props}
            className="outline-none w-full bg-transparent text-sm text-primary-text placeholder:text-secondary-text"
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