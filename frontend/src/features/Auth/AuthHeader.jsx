import { memo } from 'react'

const AuthHeader = ({header = "", subheader = ""}) => {
  return (
    <div className='flex flex-col justify-center items-center mb-4 gap-2'>
        <h1 className='text-3xl text-primary font-bold'>
          { header }
        </h1>
        <p className='text-center text-xs mx-2 text-primary-text'>
          { subheader }
        </p>
    </div>
  )
}

export default memo(AuthHeader)