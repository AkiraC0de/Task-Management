import loginHeaderLight from '../../assets/login_header_light.webp'

const AuthHeader = ({state = 'login'}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold mt-16 mb-8'>
          { state === 'login' ?
              'Log In' :
              'Sign up'
          }
          </h1>
        <img src={loginHeaderLight} alt="login_header_img" />
        <h2 className='text-[18px] text-gray-400/50'>Task Management Beta</h2>
    </div>
  )
}

export default AuthHeader