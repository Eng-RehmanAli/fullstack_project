"use client"
import { FaHome,FaPhone,FaEnvelope } from 'react-icons/fa';
import React, { useState } from 'react';
function ConatctPage() {
   const[message,setmessage]=React.useState({
    Email:"",
    Message:""
  })

  return (
    <div className="bg-[url('/images/contact.jpeg')] bg-cover bg-center h-screen">
      <div className="  flex items-center justify-center  flex-col mb-21  "> 
        <h1 className="font-extrabold text-6xl bg-[#7B7770] mt-10">Contact Us</h1>
        <p className='text-black text-2xl font-light mt-10'>We’d love to hear from you. Whether you have a question, a project idea<br/> or need support, feel free to reach out and we’ll respond as soon as possible.</p>
      </div>
      <div className="address   h-90 mt-3  flex  justify-between flex-row  ">
        <div className=' flex   text-center justify-center  flex-col gap-3 w-90 bg-[#7B7770] h-75 ml-50' >
            <p className=' flex flex-row gap-1.5 underline '><FaHome className='font-3xl text-3xl  bg-white p-1 rounded-2xl' /><span className=" font-bold text-2xl">Address</span></p>
            <p>Mohallah Hajji Park<br/>
             Street No. 1<br/> 
             Sangla Hill, Punjab, Pakistan</p>
             
            <p className=' flex flex-row gap-2 underline '><FaPhone className='font-3xl text-3xl bg-white p-1   rounded-2xl' /><span className="font-bold text-2xl">Phone</span></p>
            <p>03xx-xxxxxx</p>
            <p className=' flex flex-row gap-2 underline '><FaEnvelope className='font-3xl text-3xl bg-white p-1   rounded-2xl'  /><span className=" font-bold text-2xl">Phone</span></p>
            <p>abc@gmail.com</p>
        </div>
        <div className='flex flex-col bg-[#7B7770] p-5  w-80 h-80  items-center justify-center mr-50'>
          <h1 className='text-white text-2xl font-bold'>Place your Message </h1>
          <p className='text-white'>Type your message</p>
          <textarea  rows={10} placeholder='Enter your Message'
          className='border-3 border-white text-white  mt-4 p-3'
          value={message.Message}
          onChange={(e)=>setmessage({...message,Message:e.target.value})}></textarea>
          <input  type='email' placeholder='Enter Email'
          className='border-3 border-white text-white  mt-4 p-2'
          value={message.Message}
          onChange={(e)=>setmessage({...message,Message:e.target.value})}/>
          <button className='text-black bg-white active:scale-101 -transition-x-1 mt-4 w-58 p-2 rounded-3xl'>Submitt</button>

        </div>
      </div>
      
    </div>
  )
}

export default ConatctPage
