// @flow strict

import User from "./User";
import Link from"next/link"
import {FcAbout} from "react-icons/Fc"
import {FaStoreAlt} from "react-icons/fa"
import { useRouter } from "next/router";
export default function Header(){
    const router=useRouter();
    return(
        <header className="flex justify-between p-5 text-sm  text-gray-700">
            <div className="flex space-x-4 items-center">
            <Link href="https://about.google/">
           <FcAbout className="w-8 h-8 link " />
           </Link>
           <Link href="https://store.google.com">
            <FaStoreAlt className="w-8 h-8 link " />
            </Link>
            </div>
            <div className="flex space-x-4 p-5 item-center ">
                <Link className="link pt-5 px-2 " href="https://mail.google.com/">
                    Gmail</Link>

                <a onClick={()=>router.push(`/search?terms=${router.query.term || "google"}&searchType=image`)}className="link pt-5 px-2">Images</a>
    
                <User/>
            </div>
        </header>
    )
}