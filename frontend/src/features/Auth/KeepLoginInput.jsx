const KeepLoginInput = ({...props}) => {
  return (
    <div className='text-xs text-primary-text font-medium cursor-pointer  flex items-center gap-1'>
      <input 
        type="checkbox"
        {...props}
      />
      <span>Remeber me</span>
    </div>
  )
}
export default KeepLoginInput