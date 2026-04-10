import React from 'react'

const login = () => {
  return (
    <div>
      <form >
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default login
