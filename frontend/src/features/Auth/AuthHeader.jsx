import { memo } from 'react'
import loginHeaderLight from '../../assets/login_header_light.webp'

const AuthHeader = ({state = 'login'}) => {
  return (
    <div className='flex flex-col justify-center items-center mb-4 gap-2'>
        <h1 className='text-3xl text-primary font-bold'>
          { state === 'login' ?
              'Login Account' :
              'Sign up'
          }
        </h1>
        <p className='text-center text-xs mx-2 text-primary-text'>
          { state === 'login' ?
              'Back to the grind. Let’s get your group to the finish line.' :
              'Join now! No more silent partners. Track every task, together.'
          }
        </p>
    </div>
  )
}

export default memo(AuthHeader)