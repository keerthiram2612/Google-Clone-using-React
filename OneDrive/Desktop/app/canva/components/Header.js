import React from 'react';
import Signup from '../components/Signup';
import { SearchIcon} from "@heroicons/react/solid";
import {BsFillQuestionCircleFill} from "react-icons/Bs";
import{IoIosArrowDown}from  "react-icons/Io";
export default function Header(){
    return(
     
        <header className="flex justify-between p-5 text-sm  border-b pb-0 border-shadow-12">
            <div className="logo flex space-x-8 justify-between  items-center sm  hover:underline">
                <img className ="w-20 ml-10 object-cover cursor-pointer"src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" 
                alt="canva-logo"/>
                <div className='link flex space-x-10  justify-between'>
                <p className=" Design spotlight link  text-gray-600 btn-Design sm-2"><IoIosArrowDown className/>
                    Design spotlight</p>

                <p className="link  text-gray-600 btn-Bussiness sm-2"><IoIosArrowDown className/>
                    Bussiness</p>
                <p className="link text-gray-600 btn-Education sm-2"><IoIosArrowDown className/>
                    Education</p>
                <p className="link  text-gray-600 btn-plans sm-2"><IoIosArrowDown className/>
                    plans and pricing</p>
                <p className="link sm-2 text-gray-600 btn-Learn sm-2"><IoIosArrowDown className/>
                    Learn</p>
            </div>
            </div>
                
            
            <div className="flex space-x- items-center justify-between">
                <button className="link  text-gray-600 btn-Login cent  sm-2">Log in</button>
                 
                <Signup/>
                </div>
                
                
                
                 
                
               
        </header>
        
    )
}
