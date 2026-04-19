"use client"
import Image from "next/image"
import React from "react"
import Link from "next/link"

function Page() {
    const [user,setuser]=React.useState({
        username:"",
        email:"",
        password:"",
    })
  return (
    <div className="split flex h-screen w-full">
      <div className="left-side  relative flex-1">
<Image     src="/images/rehman3.jpeg" alt="pic"  className="object-cover" fill/>
      </div>
      <div className="right-side flex flex-1 justify-center items-center  ">
        <div className="innerdiv flex  flex-col gap-4  w-80 px-4">
            <h1 className="bg-blue-600 rounded-2xl font-bold text-center p-2 ">Sign-up</h1>
            <label htmlFor="username">Username</label>
            <hr/>
           <input    className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"    id="username" type="text" placeholder="Enter the Username"
            value={user.username}
             onChange={(e)=>setuser({...user,username:e.target.value})}/>
            {/*the email*/}
             <label htmlFor="email">Email</label>
             <hr/>
           <input  className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black" id="email" type="text" 
           placeholder="Email"
            value={user.email}
             onChange={(e)=>setuser({...user,email:e.target.value})}/>
             {/*the password*/}
             <label htmlFor="Password">Password</label>
             <hr/>
           <input  className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black" id="Password" type="text" 
           placeholder="Password"
            value={user.password}
             onChange={(e)=>setuser({...user,password:e.target.value})}/>

             <button className="bg-blue-600 p-2 rounded-2xl text-white  active:translate-y-1 active:shadow-inner transition" onClick={Page} >Submitt</button>
           <Link href="/login" className="inline"> Go to the login-page<span className=" text-green-900 font-bold text-2xl ">?</span></Link>  
        </div>
      </div>
    
    </div>
  )
}

export default Page
