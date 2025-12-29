const SecondaryButton = ({children, className, ...props}) => {
  return (
    <button
      className={`racking-widest px-2 py-2 rounded-lg font-medium border-2 text-primary-text cursor-pointer hover:scale-103 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
export default SecondaryButton