"use client"
import Image from "next/image"
function Homepage() {
  return (
    <div>
 
       <div className="w-100vw bg-white h-100vh p-12 m-2  grid grid-cols-3 grid-rows-8  gap-5">
  <div className="crads relative hover:scale-101 transition  bg-white w-90">
    
    <Image
    id="1"
      className="h-109 w-90  "
      src="/images/web1.jpeg"
      alt=""
      width={500}
      height={300}
      
    />

    <div className="absolute  bottom-4 left-4 ">
      <h1 className="font-extrabold text-xl text-white">
        Web-Development
      </h1>
      <p className="text-white">Build modern, responsive websites that deliver performance and great user experience.</p>
<button className="bg-[#7B7770] w-70 p-1.5 hover:scale-101 transition cursor-pointer active:translate-x-0.5 active:shadow-inner shadow-md border-2 border-black  mt-4" >Lets_work</button>
    </div>

  </div>
  <div className="crads relative hover:scale-101 transition  bg-white w-90">
    
    <Image
    id="2"
      className="h-109 w-90  "
      src="/images/Ai.jpg"
      alt=""
      width={500}
      height={300}
      
    />

    <div className="absolute  bottom-4 left-4 ">
      <h1 className="font-extrabold text-xl text-white">
        Artificial Intelligence
      </h1>
      <p className="text-white">Smart solutions powered by AI to improve efficiency, decision-making, and digital experiences..</p>
<button className="bg-[#7B7770] w-70 p-1.5 hover:scale-101 transition cursor-pointer active:translate-x-0.5 active:shadow-inner shadow-md border-2 border-black  mt-4" >Lets_work</button>
    </div>

  </div>
  <div className="crads relative hover:scale-101 transition  bg-white w-90">
    
    <Image
    id="3"
      className="h-109 w-90  "
      src="/images/LLM.jpg"
      alt=""
      width={500}
      height={300}
      
    />

    <div className="absolute  bottom-4 left-4 ">
      <h1 className="font-extrabold text-xl text-white">
        Large Language Models (LLMs)
      </h1>
      <p className="text-white">Build intelligent applications that understand and generate human-like text for chatbots, automation, and smart assistance.</p>
<button className="bg-[#7B7770] w-70 p-1.5 hover:scale-101 transition cursor-pointer active:translate-x-0.5 active:shadow-inner shadow-md border-2 border-black  mt-4" >Lets_work</button>
    </div>

  </div>
  <div className="crads relative hover:scale-101 transition  bg-white w-90">
    
    <Image
    id="4"
      className="h-109 w-90  "
      src="/images/app.jpg"
      alt=""
      width={500}
      height={300}
      
    />

    <div className="absolute  bottom-4 left-4 ">
      <h1 className="font-extrabold text-xl text-white">
        App Solutions
      </h1>
      <p className="text-white">Turn your ideas into powerful, high-performing applications for Android, iOS, and the web..</p>
<button className="bg-[#7B7770] w-70 p-1.5 hover:scale-101 transition cursor-pointer active:translate-x-0.5 active:shadow-inner shadow-md border-2 border-black  mt-4" >Lets_work</button>
    </div>

  </div>
  <div className="crads relative hover:scale-101 transition  bg-white w-90">
    
    <Image
    id="5"
      className="h-109 w-90  "
      src="/images/additing.jpg"
      alt=""
      width={500}
      height={300}
      
    />

    <div className="absolute  bottom-4 left-4 ">
      <h1 className="font-extrabold text-xl text-white">
        Editing Services
      </h1>
      <p className="text-white">We deliver high-quality photo and video editing to create polished, engaging visual content.</p>
<button className="bg-[#7B7770] w-70 p-1.5 hover:scale-101 transition cursor-pointer active:translate-x-0.5 active:shadow-inner shadow-md border-2 border-black  mt-4" >Lets_work</button>
    </div>

  </div>
  <div className="crads relative hover:scale-101 transition  bg-white w-90">
    
    <Image
    id="5"
      className="h-109 w-90  "
      src="/images/markiting.png"
      alt=""
      width={500}
      height={300}
      
    />

    <div className="absolute  bottom-4 left-4 ">
      <h1 className="font-extrabold text-xl text-white">
       Marketing Solutions
      </h1>
      <p className="text-white">Reach the right audience and boost your brand with smart, effective marketing.</p>
<button className="bg-[#7B7770] w-70 p-1.5 hover:scale-101 transition cursor-pointer active:translate-x-0.5 active:shadow-inner shadow-md border-2 border-black  mt-4" >Lets_work</button>
    </div>

  </div>
</div>
       </div>
       )
}

export default Homepage
