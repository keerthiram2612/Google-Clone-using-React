import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    
    const navigate = useNavigate();
    
  return (
    
    
   <>
      <div className="header">
        <ul className='list '>
            <li className={`cursor-pointer`} onClick={()=>navigate("/")}>Home</li>
            <li  className ={`cursor-pointer`}onClick={()=>navigate("/login")}>Login</li>
        </ul>
      </div>
    </>
  )
}
