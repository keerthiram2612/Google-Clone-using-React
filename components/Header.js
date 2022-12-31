// @flow strict
import User from "./User";


export default function Header(){
    return(
        <header className="flex justify-between p-5 text-sm  text-gray-700">
            <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
            </div>
            <div className="flex space-x-4 p-5 item-center">
                <p className="link pt-5 px-2">Gmail</p>
                <p className="link pt-5 px-2">Images</p>
                <User/>
            </div>
        </header>
    )
}