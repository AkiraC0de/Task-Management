const PrimaryButton = ({className, onClick, children}) => {
  return (
    <button 
        className={`tezt-lg font-bold tracking-widest p-4 w-full rounded-xl bg-[#42bdec] text-white  ${className}`}
        onClick={onClick || function(e){e.preventDefault()}}
    >
        {children}
    </button>
  )
}

export default PrimaryButton