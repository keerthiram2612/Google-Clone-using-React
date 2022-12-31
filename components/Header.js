// @flow strict

import User from "./User";
import {FcAbout} from "react-icons/Fc"
import {FaStoreAlt} from "react-icons/fa"
export default function Header(){
    return(
        <header className="flex justify-between p-5 text-sm  text-gray-700">
            <div className="flex space-x-4 items-center">
           <FcAbout className="w-8 h-8 link " />
            <FaStoreAlt className="w-8 h-8 link " />
            </div>
            <div className="flex space-x-4 p-5 item-center">
                <p className="link pt-5 px-2">Gmail</p>
                <p className="link pt-5 px-2">Images</p>
                <User/>
            </div>
        </header>
    )
}