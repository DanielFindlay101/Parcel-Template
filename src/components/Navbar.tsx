import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'


const darkLogo = require('../images/dark.png')

export default () => {
  const [modal,setModal] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return <React.Fragment>
      <div className='header-area'>
          <img src={darkLogo} alt="fixy-logo" className='header-logo'/>
          <ul className='header-link-container'>
              <li className='header-link'>
                <button className='header-button' onClick={handleClick}>Sign Out</button>
              </li>
              <li className='header-link' onClick={() => setModal(!modal)}>Press</li>
          </ul>
      </div>
    {modal && <Modal handleClick={handleClick}/>}
  </React.Fragment>
} 
