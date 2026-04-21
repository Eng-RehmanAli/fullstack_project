"use client"
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
function Footerpage() {
  return (
   <div className="w-100vw border-4 border-black bg-[#222121] flex justify-between  p-8 m-3">
  
  <div className="flex flex-col gap-3 text-white ml-12">
    <h1 className="font-bold text-xl">
      Coffetech@ <span className="align-super text-sm font-extralight">Pvt Ltd</span>
    </h1>

    <p className="font-semibold text-2xl">what we provide</p>

    <p className="leading-normal text-sm font-extralight">
      CoffeeTech® develops scalable <br />
      and innovative web applications <br />
      delivering clean design strong <br />
      performance, and reliable digital experiences.
    </p>
  </div>

  <div className="text-white">
    <h3 className="font-semibold mb-2">Quick Links</h3>
    <ul className="text-sm space-y-1">
      <li>Home</li>
      <li>Projects</li>
      <li>Contact</li>
      <li>Blog</li>
    </ul>
  </div>

  <div className="text-white">
    <h3 className="font-semibold mb-2">Contact</h3>
    <p className="text-sm">Email: jezra6127@gmail.com</p>
    <p className="text-sm">Phone: +92 328-9193373</p>

    <h3 className="font-semibold mb-2 mt-3">Follow Us</h3>

    <div className="flex gap-4">
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

</div>
  )
}

export default Footerpage
