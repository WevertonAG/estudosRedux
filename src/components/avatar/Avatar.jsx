import React from 'react';
import './Avatar.css'


const Avatar = ({src}) => {
  return (
    <div className='avatar'>
        <img src={src} width="150px" alt="avatar" />
      </div>
  )
}

export default Avatar