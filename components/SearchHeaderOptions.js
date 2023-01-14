// @flow strict
import{useRouter} from "next/router";
import  React from 'react';
import SearchHeaderOption from './SearchHeaderOption';
import{BiSearchAlt} from "react-icons/Bi";
import{BiPhotoAlbum} from "react-icons/Bi";
export default function SearchHeaderOptions(){
    const router = useRouter();
        return (
            <div className="flex space-x-6 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
            <BiSearchAlt className="w-8 h-7 text-500 mr-3 hidden sm:inline-flex text-blue-500" /> 
            <SearchHeaderOption title="All"selected={router.query.searchType=== "" || !router.query.searchType}/>
            <BiPhotoAlbum className="w-8 h-7"/>
            <SearchHeaderOption title="Images"selected={router.query.searchType==="image" }/>
            </div>
        );
    }

