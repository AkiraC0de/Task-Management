import { useState } from 'react'
import { EyeOff, EyeIcon } from 'lucide-react';

const TOGGLE_BUTTON_COLOR = "#6a7282";

const TogglePasswordButton = ({showPassword, toggle}) => {
  return(
    <button 
      type='button'
      className='cursor-pointer text-gray-500'
      onClick={toggle}
    > 
      {showPassword ? <EyeOff/> : <EyeIcon/>}
    </button>
  )
}

const InputField = ({type = 'text', header, icon, placeholder = '', onChange, value, name}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type == "password";
  // @desk add the ability to toggle between "text" and "password" input type if the type params is set as "password"
  const inputType = isPasswordType && showPassword ? "text" : type; 
  
  return (
      <div>
        {header && <label className='ml-2 font-semibold text-md mb-2'>{header}</label>}
        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 gap-2">
          <span className="text-gray-500">{icon}</span>
          <input
            type={inputType}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className="outline-none w-full bg-transparent text-md text-gray-900 placeholder:text-gray-500"
          />
          { 
            isPasswordType && 
            <TogglePasswordButton 
              showPassword={showPassword} 
              toggle={() => setShowPassword(prev => !prev)}
            /> 
          }
        </div>
      </div>
  )
}

export default InputField