import * as React from 'react'
import { useState } from 'react'

export default function Login() {
   const [email, setEmail] = useState<string>("")     
   const [password, setPassword] = useState<string>("")

    const handleSubmit = (e):void => {
        e.preventDefault
        console.log(email, password);
        
    }

  return (
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

            <p>{password}</p>
        <button className='btn'>login</button>
            <br />
                    <div className='a-styles'>
                       <a href="#">sign up</a>
                       <a href="#">forgot password</a>
                    </div>
    </form>
  )
}
