const SecondaryButton = ({children, ...props}) => {
  return (
    <button
      className="racking-widest px-8 py-3 rounded-4xl font-bold border-2 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  )
}
export default SecondaryButton