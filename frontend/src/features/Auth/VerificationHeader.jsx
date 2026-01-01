const VerificationHeader = ({email}) => {
  return (
    <div className='flex flex-col justify-center items-center mb-4 gap-2'>
      <h1 className='text-3xl text-primary font-bold'>
        Verify your email
      </h1>
      <p className='text-center text-sm mx-2 text-primary-text'>
        We've sent a 6-digit verification code to your email address 
        <strong> {email} </strong>. 
        Please enter the code below to confirm your identity.
      </p>
    </div>
  )
}
export default VerificationHeader