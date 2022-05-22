import React from 'react'
import errorImage from '../../../assest/images/error.svg'

const Error = () => {
  return (
    <div>
      <img src={errorImage && errorImage} alt='error' />
    </div>
  )
}

export default Error
