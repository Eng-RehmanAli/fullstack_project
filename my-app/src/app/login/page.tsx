"use client"
import Link from "next/link";
import React from 'react'

function LoginPage() {
const [user,setuser]=React.useState({
    email:"",
    password:" "
})
  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('/images/random.jpeg')] bg-cover bg-center">
     {/* Login page will made here inshallah*/}
     <div className="outer flex flex-col bg-black px-60 py-60  gap-6 rounded-2xl gap-2 w-80 items-center justify-center  bg-black ">
        <h1 className="bg-blue-400 rounded-2xl w-80 p-3 font-bold text-center text-2xl">Login</h1>
      <div className="LOginpage  flex flex-col gap-4 "> 
        <label htmlFor="Email" className="font-bold text-2xl text-white">Email</label>
        <input type="text" placeholder="Email" id="Email"
        value={user.email}
        onChange={(e)=>setuser({...user,email:e.target.value})}
        className=" text-2xl text-white w-80 focus:outline-none focus:right-2.5  border-4 border-white "/>
       < label htmlFor="Password" className="font-bold text-2xl text-white">Password</label>
        <input type="Password" placeholder="Password" id="Password"  
        value={user.password}
        onChange={(e)=>setuser({...user,password:e.target.value})} 
        className=" text-2xl text-white w-80 focus:outline-none focus:right-2.5   border-4 border-white "/>
          <button className="bg-blue-400 rounded-2xl w-80 p-3  text-center active:translate-y-1 active:shadow transition ">Submitt
          </button>
          <Link href="/signup">Go to the sign-up page<span className=" text-green-900 font-bold text-2xl ">?</span></Link>
      </div>
     </div>
    </div>
  )
}

export default LoginPage
