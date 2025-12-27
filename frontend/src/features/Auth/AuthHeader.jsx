import { memo } from 'react'
import loginHeaderLight from '../../assets/login_header_light.webp'

const AuthHeader = ({state = 'login'}) => {
  return (
    <div className='flex flex-col justify-center items-center mb-8'>
        <h1 className='text-3xl text-gray-600 font-bold'>
          { state === 'login' ?
              'Log In' :
              'Sign up'
          }
          </h1>
    </div>
  )
}

export default memo(AuthHeader)