"use client"
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { useEffect, useRef } from "react";
import Link from "next/link";
function Headerpage() {
  const containerf=useRef<HTMLDivElement>(null);

  
  useEffect(()=>{
     const word="WELCOME"
      const container=containerf.current
      if(!container) return
      word.split('').forEach((char,i)=>{
    const span=document.createElement('span');
    
    span.textContent=char
    span.className = 'inline-block text-4xl font-bold text-white opacity-0'
    container.appendChild(span)
    {/*The case of the animation is */}

    setTimeout(() => {
      span.classList.add('animated-pop')
    }, i*150);
  })

      
  },[])
  return (
    <div>
      <header>
       <div className="min-w-100vw  bg-[#222121] mr-4 m-3 p-6 flex flex-row  justify-between">
        <div className=" h-10  bg-[#222121] w-60 text-center flex justify-center  flex-col  ">
            <h1 className="font-extrabold  h-20 text-sm flex justify-left p-0  hover:scale-105 transition text-white cursor-pointer  mt-2">CoffeTech@  Developer_Hub</h1>
           <div className="flex flex-row gap-4  ml-6 text-white mt-4">
             <a href="https://www.linkedin.com/in/rehman-ali3" target="_blank">
                    <FiLinkedin />
                  </a>
                  <a href="https://github.com" target="_blank">
                    <FiGithub />
                  </a>
                  <a href="https://twitter.com" target="_blank">
                    <FiTwitter />
                  </a>
           </div>
        </div>
        <div ref={containerf}
          className="flex justify-center gap-[2px] mb-4  text-black">
          
        </div>
    <div  className="mr-29" >
      <ul className="flex flex-row bg-[#222121] gap-4 w-80  justify-center  mt-1.5">
       <Link href="/Home"> <li className="font-extrabold text-sm text-white cursor-pointer underline ">Home</li></Link>
          <Link href="/Contact"> <li className="font-extrabold text-sm text-white cursor-pointer underline ">Contact</li></Link>
          <Link href="/about"> <li className="font-extrabold text-sm text-white cursor-pointer underline ">About</li></Link>
          <Link href="/profile"> <li className="font-extrabold text-sm text-white cursor-pointer underline ">Profile</li></Link>
        
      </ul>
    </div>
    <div className="text-white flex flex-row gap-3 ">
      <button className="bg-white text-black h-8 w-15 rounded-0.5xl font-bold cursor-pointer">Login</button>
      <button className="bg-white text-black h-8 w-15 rounded-0.5xl font-bold cursor-pointer">Sigup</button>
    </div>
       </div>
      </header>
    </div>
  )
}

export default Headerpage
