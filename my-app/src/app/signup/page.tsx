import Image  from "next/image";
import React from 'react'
import { useRef,useEffect } from "react";
function Signpage() {

const containerf=useRef<HTMLDivElement>(null);
const sutileref=useRef<HTMLParagraphElement>(null);
const  formref=useRef<HTMLDivElement>(null);

useEffect(()=>{
  const word="WELCOME"
  const container=containerf.current
  const  subtitle=sutileref.current
  const  form=formref.current


  if(!container||!subtitle||!form) return
  word.split('').forEach((char,i)=>{
    const span=document.createElement('span');
    
    span.textContent=char
    span.className = 'inline-block text-4xl font-bold text-gray-900 opacity-0'
    container.appendChild(span)
    {/*The case of the animation is */}

    setTimeout(() => {
      span.classList.add('animated-pop')
    }, i*150);
  })



  {/*The case of the subtitle is */}
  const done=word.length*150+400;

  setTimeout(() => {
    subtitle.style.opacity='1'
  }, done);
   {/*The case of the form animation is */}
  setTimeout(() => {
    form.style.opacity='1'
  }, done+200);
},[])




  return (
   <div className="flex flex-row  min-h-screen">

      {/* LEFT SIDE — branding */}
      <div className="flex-1 ">
        <div className="text-left p-10 mt-60 flex flex-col gap-1.5">
          <h1 className="font-extrabold text-8xl text-[#7B7770]">Coffetech@</h1>
          <div className="flex flex-row gap-3.5 ml-4 items-center">
            <p className="underline  ">
              Rehman ALI <span className="align-super">Pro</span>
            </p>
            <Image src="/images/icon.jpg" alt="icon" width={39} height={20} />
            <p className="underline">
              Developers <span className="align-super">MooD</span>
            </p>
          
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — login form */}
      <div className="flex-1  flex flex-col items-center justify-center white">

        {/* Letter animation renders here */}
        <div
          ref={containerf}
          className="flex justify-center gap-[2px] mb-4  text-black"
        />

        {/* Subtitle fades in after letters */}
        <p
          ref={sutileref}
          className="font-extralight text-sm text-black mb-6 transition-opacity duration-500 opacity-0"
        >
          Welcome to the Coffetech@
        </p>

        {/* Form fades in after subtitle */}
        <div
          ref={formref}
          className="flex flex-col gap-3 w-full text-black max-w-sm px-8 opacity-0 transition-opacity duration-500 bg-white p-6 rounded-xl"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg text-sm focus:outline-none focus:border-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border-2 border-gray-900 rounded-lg text-sm focus:outline-none focus:border-gray-400"
          />
          <button className="w-full py-2 bg-[#7B7770] text-white text-sm rounded-lg hover:bg-gray-700 transition-colors">
            Log in
          </button>
        </div>

      </div>

    </div>
  )
}

export default Signpage






