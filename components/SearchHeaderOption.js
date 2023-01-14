
import {useRouter} from "next/router";

export default function SearchHeaderOption({title,selected}){
    const router = useRouter ()
    function selectTab(title){
        router.push(`/search?term=${router.query.term}&searchType=${title === "images " ? "image" : "" }`
        );
}
    return(
        <div onclick={()=>selectTab(title)}
        className={`flex-items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${selected && "text-blue-500 border-blue-500"}`}>
            <p>{title}</p>
        </div>
    )
}