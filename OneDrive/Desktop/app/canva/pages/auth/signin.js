
import Header from '../../components/Header';
import React from 'react'
import { getProviders } from 'next-auth/react';


export default function signin({providers}){
return(
    
    <>
        <Header/>
        <div className="">
            {Object.values(providers).map(provider =>( /*whenever map is using should provide the key*/
                <div key={provider.name} className="">
                       <p class="center flex sm ">Canva makes it easy to create professional designs and to share or print them .</p>
                       
                     </div> 
                
            ))}
           
        </div>
    </>
    
    
)
}
export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props: {providers},
    }
}