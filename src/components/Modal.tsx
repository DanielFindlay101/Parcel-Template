import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Modal({ handleClick }) {
   
  return (
    <div className='modal-container'>
        <ul className='modal-links'>
            <li className='modal-link-tag'>Manage Account</li>
            <li className='modal-link-tag'>Apple Store</li>
            <li className='modal-link-tag'>Google Play Store App</li>
            <li className='modal-link-tag' onClick={handleClick}>Logout</li>
        </ul>
    </div>
  )
}
