"use client"
import { FiBookmark, FiShare2, FiExternalLink } from "react-icons/fi";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react";


function Profilepage() {
 const vodioarray = [
  "/video/4k.mp4",
  "/video/amazon.mp4",
  "/video/comerical.mp4",
  "/video/nextflix.mp4",
  "/video/tech.mp4"
]

  const videoref=useRef<HTMLVideoElement[]>([]);

  const playruner=(index:number)=>{
       const video=videoref.current?.[index]
       if(video){
        video.play();
       }
      }
    const puseruner=(index:number)=>{
  const video=videoref.current?.[index]
  if(video){
    video.pause();
    video.currentTime=0;
  } 
  }






  return (
    <div className=" bg-white " >
       
                <header className="flex justify-between"  >
                    <div className="flex  flex-row gap-2 m-4 ">
                    <p><span className=" font-semibold text-2xl  hover:text-black hover:cursor-pointer text-[#7B7770] ">Coffetech@</span></p>
                    <p className="font-extralight text-sm">by</p>
                     <Image  className="rounded-2xl "    src="/images/rehman2.jpeg"  alt="Pic" width={28} height={19}/>
                   {/*The page will be here for the rendering */}  <a  href="www.linkedin.com/in/rehman-ali3" className="font-extralight text-sm underline hover:text-[#7B7770] hover:cursor-pointer">Rehman ALI<span className="align-super text-sm"> Pro</span></a>
                   <FiExternalLink className="cursor-pointer hover:text-[#7B7770] mt-1" />       
                    <p className="text-sm font-extralight underline mt-1 hover:text-[#7B7770] hover:cursor-pointer">MakeTHETECH</p>
                    </div>
                    <div  className="flex  flex-row gap-4 m-5 ">
      <FiBookmark className="cursor-pointer hover:text-[#7B7770]" />
      <FiShare2 className="cursor-pointer hover:text-[#7B7770]" />
      <FiExternalLink className="cursor-pointer hover:text-[#7B7770]" />
    </div>
                </header>
                <main className="border-box">
                     
                    
                   <div  className="text-center mt-35 font-serif">
                    <p className="text-center mt-35  ">Rehman ALI <span className="align-super text-sm  font-extralight">Pro</span> Developer</p>
                    <h1  className="font-extrabold text-9xl text-[#7B7770]  tracking-normal   ">Coffetech@</h1>
                    <div className="flex flex-row justify-center items-center gap-2">
                         
                     <Image  className="rounded-2xl  mt-1"    src="/images/rehman2.jpeg"  alt="Pic" width={28} height={19}/>
                   {/*The page will be here for the rendering */}  <a  href="www.linkedin.com/in/rehman-ali3" className="font-extralight text-sm underline hover:text-[#7B7770] hover:cursor-pointer">Rehman ALI<span className="align-super text-sm"> Pro</span></a>
                   <FiExternalLink className="cursor-pointer hover:text-[#7B7770] mt-1" />       
                    <p className="text-sm font-extralight underline mt-1" >MakeTHETECH</p>
                    </div>
                    </div> 
                    <div className="flex justify-center p-5 m-5 ">
  <Link  href="google.con"><Image src="/images/teck.jpg"className="bg-black rounded-3xl hover:translate-y-1 transition"    alt="pic" width={600} height={90} /></Link >
  
</div>
<p className="max-w-xl mx-auto text-center leading-relaxed">
  CoffeeTech® develops scalable and innovative web applications delivering clean design strong performance, and reliable digital experiences.
</p>
      <div className="flex flex-col  gap-2 leading-0 justify-center  text-center border-0   w-64  text-justify ml-88 mt-7">
        <p className="text-sm font-extralight">Projects</p>
        <h1  className="font-extrabold leading-4">See the Bollow  <br/>   in the vidoes</h1>
      </div>
       <div className="flex items-center justify-center  ">
         <div className="  grid grid-cols-2 grid-rows-2 gap-3  border-0 border-black  mt-14 justify-center     ">
          {vodioarray.map((srclin, index) => (
  <div key={index} className="relative">

    <video
      src={srclin}
      muted
      loop
      playsInline
      className="w-68 h-40 rounded-xl object-cover"
      ref={(el) => {
        if (el) videoref.current[index] = el;
      }}
      onMouseLeave={() => puseruner(index)}
      onMouseEnter={() => playruner(index)}
    />

    <h4 className="absolute inset-0 flex items-center  text-white text-sm font-light cursor-pointer bg-black/70s rounded-3xl mt-18 w-21">
      Project_clone {index + 1}
    </h4>

  </div>
))}
        </div>
       </div>
 
       <footer >
         
   <div className="border-4 border-black bg-[#222121] flex flex-row justify-between mt-5 p-17 ">
      <div className="flex gap-3  flex-col text-white ml-13">
        <h1 className="font-bold text-xl">Coffetech@ <span className="align-super text-sm font-extralight">Pvt Ltd</span></h1>
        <p className="font-semibold text-2xl">what we provide</p>
        <p className=" flex content-justify  leading-normal text-sm font-extralight "> CoffeeTech® develops scalable <br />
          and innovative web applications <br />delivering clean design strong <br /> performance, and reliable  digital experiences.</p>
      </div>
       <div className=" text-white">
  <h3 className="font-semibold mb-2">Quick Links</h3>
  <ul className="text-sm space-y-1">
    <li>Home</li>
    <li>Projects</li>
    <li>Contact</li>
    <li>Blog</li>
  </ul>
</div>
<div className=" text-white">
  <h3 className="font-semibold mb-2">Contact</h3>
  <p className="text-sm">Email: jezra6127@gmail.com</p>
  <p className="text-sm">Phone: +92 328-9193373</p>
  <h3 className="font-semibold mb-2">Follow US</h3>
 <div className="flex flex-row  gap-4">
  <a href="www.linkedin.com/in/rehman-ali3" target="_blank">
    <FiLinkedin className="hover:text-white cursor-pointer" />
  </a>

  <a href="https://github.com" target="_blank">
    <FiGithub className="hover:text-white cursor-pointer" />
  </a>

  <a href="https://twitter.com" target="_blank">
    <FiTwitter className="hover:text-white cursor-pointer" />
  </a>
 </div>
</div>
<div className="flex gap-3  flex-col text-white">
  
</div>
      
      
   </div>
       </footer>
    </main>
            </div>
    
    
  )

}
export default Profilepage
