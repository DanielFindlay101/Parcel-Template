import * as React from 'react'

const darkLogo = require('../images/dark.png')

export default function Navbar() {
  return (
    <div className='header-area'>
        <img src={darkLogo} alt="fixy-logo" className='header-logo'/>
        <ul className='header-link-container'>
            <li className='header-link'>Sign Out</li>
            <li className='header-link'>Image Here</li>
        </ul>
    </div>
  )
}
