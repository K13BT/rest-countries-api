import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <FontAwesomeIcon icon={faCircleNotch} spin />
  )
}

export default Loading