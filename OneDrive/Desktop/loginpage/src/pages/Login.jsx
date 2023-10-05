import React from 'react'
import { useNavigate } from 'react-router'
export default function Login() {
   const navigate = useNavigate();
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className='login'>
      <div className="login-page ">
        <h1>Login</h1>
        <i class="fa-solid fa-user fa-2xl"></i><input type="text" placeholder='Enter your username' /><br/>
        <i class="fa-solid fa-lock fa-2xl"></i><input type="text" placeholder='Enter password' /><br/>
         <button className='btn'>Login</button><p>Or</p><br/>
         <button className='btn'>Forgot Password</button>
      </div>
    </div>
    </>
  )
}
