import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <FontAwesomeIcon icon={faCircleNotch} spin className='text-8xl font text-slate-500' />
    </div>
  )
}

export default Loading