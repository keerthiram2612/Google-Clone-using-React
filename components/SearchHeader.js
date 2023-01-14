// @flow strict
import Image from "next/image";
import {useRouter} from "next/router";
import {useRef} from "react"; 
import{FaMicrophone} from "react-icons/Fa";
import{BiSearchAlt} from "react-icons/Bi";
import{RxCross1} from "react-icons/Rx";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";


export default function SearchHeader(){
    const router =useRouter()
    const searchInputRef=useRef(null);
    function search(event){
        event.preventDefault();
        const term= searchInputRef.current.value;
        if(!term.trim())return;
        router.push(`/search?term=${term.trim()}&SearchType=`);
    }
        return (
            <header className="sticky top-0 bg-white">
              <div className="flex w-full p-6 items-center">
                <Image 
                    onClick={()=>router.push("/")}
                  width="120"
                 object-Fit="contain"
                height="40" 
                className="cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"/>
                <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
                    <input type="text" defaultValue={router.query.term}ref={searchInputRef}
                    className="w-full focus:outline-none"
                    />
                     <RxCross1 onClick={()=>(searchInputRef.current.value="")}className="w-8 h-7 text-gray-500 cursor-pointer sm:mr-3"/>
                     <FaMicrophone className="w-9 h-7 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 -gray-300 mr-3"/>
                     <BiSearchAlt className= "w-8 h-7 text-500 mr-3 hidden sm:inline-flex text-blue-500" />
                     <button onClick={search} type="submit" hidden></button>
                </form>
                <User className="ml-auto whitespace-nowrap"/>
              </div>
              <SearchHeaderOptions/>
            </header>
        );
    }


