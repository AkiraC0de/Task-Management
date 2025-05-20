import React from 'react'

const InputField = ({type = 'text', header, icon, placeholder = '', onChange, value, name}) => {
  return (
      <div>
        {header && <h1 className='ml-2 font-semibold text-md mb-2'>{header}</h1>}
        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 gap-2">
          <span className="text-gray-500">{icon}</span>
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className="outline-none w-full bg-transparent text-md text-gray-900 placeholder:text-gray-500"
          />
        </div>
      </div>
      
  )
}

export default InputField