import Header from '@/components/Header';
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
       <title>Canva</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          {/*Header*/}

          <Header/>
          {/*Body*/}
          <div className="body">
           <p className="body p-5">What will you design today?</p>
           </div>
           <div className="para">
           <p class="center flex sm ">Canva makes it easy to create professional designs and to share or print them.</p>
           <div className="sign mt-7">
        
           </div>
           
           <img className ="h-30 mr-5 ml-5 mt-10  p-5 "src="https://www.rebilly.com/44967830fa84e1e897bb282fd02fbe55/designfromablanktemplate.gif"></img>
           <div className="mt-10 canva mr-90">
            
           

           </div>
           
           </div>
  
          {/*Footer*/}
        </div>
  
  );
}
