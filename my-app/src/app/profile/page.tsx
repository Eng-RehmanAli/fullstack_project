"use client"
import { FiBookmark, FiShare2, FiExternalLink } from "react-icons/fi";
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react";


function Profilepage() {
  const vodioarray=["4k.mp4","amazon.mp4","comerical.mp4","nextflix.mp4","tech.mp4"]
  const videoref=useRef<HTMLVideoElement[]>([]);

  const playruner=(index:number)=>{
       const video=videoref.current[index]
       if(!video){
        video.play();
       }
    const puseruner=()=>{
      if(!videoref.current){ return
       }

     videoref.current?.pause();
     videoref.current.currentTime=0; 
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
        <div className="flex gap-3">
          <video src="/video/nextflix.mp4"
          ref={videoref}
          className="w-61 h-32  hover:cursor-pointer"
          playsInline
          loop
          muted
          onMouseEnter={playruner}
          onMouseLeave={puseruner}
          />
           <video src="/video/nextflix.mp4"
          ref={videoref}
          className="w-61 h-32  hover:cursor-pointer"
          playsInline
          loop
          muted
          onMouseEnter={playruner}
          onMouseLeave={puseruner}
          />
           <video src="/video/amazon.mp4"
          ref={videoref}
          className="w-61 h-32  hover:cursor-pointer"
          playsInline
          loop
          muted
          onMouseEnter={playruner}
          onMouseLeave={puseruner}
          />
           <video src="/video/comerical.mp4"
          ref={videoref}
          className="w-61 h-32  hover:cursor-pointer"
          playsInline
          loop
          muted
          onMouseEnter={playruner}
          onMouseLeave={puseruner}
          />
           <video src="/video/4k.mp4"
          ref={videoref}
          className="w-61 h-32  hover:cursor-pointer"
          playsInline
          loop
          muted
          onMouseEnter={playruner}
          onMouseLeave={puseruner}
          />
            <video src="/video/tech.mp4"
          ref={videoref}
          className="w-61 h-32  hover:cursor-pointer"
          playsInline
          loop
          muted
          onMouseEnter={playruner}
          onMouseLeave={puseruner}
          />

        </div>
    
                </main>
            </div>
    
    
  )
}

export default Profilepage
