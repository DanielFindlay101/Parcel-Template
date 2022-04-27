import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import BigLogo from '../images/biglogo.png'
const BigLogo = require('../images/biglogo.png')

export default function Login() {
   const [email, setEmail] = useState<string>("")     
   const [password, setPassword] = useState<string>("")
   const navigate = useNavigate()

    const handleSubmit = (e):void => {
        e.preventDefault
        console.log(email, password);   
        navigate('/dashboard')
    }

  return (
    <React.Fragment>
    <div className="page-layout">
      <div className='form_layout'>
        <img src = {BigLogo} className="logo" />
            <form className='form_styles' onSubmit={handleSubmit}>
                <h1>login</h1>
                    <input
                        type="input"
                        placeholder='email'
                        className='input-box'
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='password'
                        className='input-box'
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                <button className='btn'>login</button>
                    <br />
                <div className='a-styles'>
                <a href="#">sign up</a>
                <a href="#">forgot password</a>
                </div>
            </form>
        </div>
    </div>
    </React.Fragment>
  )
}
