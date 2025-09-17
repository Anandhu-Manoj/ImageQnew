import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=" min-w-screen text-white flex h-screen" style={{position:"relative"}} >
         <div className="flex w-1/2  container">
          <div className="text-start flex  flex-col justify-center " style={{position:"absolute",left:"50px",top:"180px",zIndex:"10"}}>
            <h1 className="text-6xl font-semibold m-5 ">Transform Your GTM</h1>
            <p className="text-wrap ms-5 text-normal font-[400] text-white mb-5">
              ImageQ helps businesses scale revenue through Go-To-Market
              Planning, Brand <br /> Strategy Planning, Agentic AI based
              Marketing Automation, Digital <br /> Marketing implementation and
              strategic Media Communication.
            </p>
            <div className="flex gap-5 ms-5 mt-3 ">
              <button className="bg-white/15 backdrop-blur-md border border-white/30 text-white rounded-3xl py-2 px-6 shadow-lg hover:bg-white/25 transition">
                Book A Consultation
              </button>
              <button className="bg-white/15 backdrop-blur-md border border-white/30 text-white rounded-3xl py-2 px-6 shadow-lg hover:bg-white/25 transition">
                Dont Click This
              </button>

             
            </div>
          </div>
        </div>
        <div>
          <Image src="/background.png" alt="Hero" width={835} height={835} className='opacity-100' style={{position:"absolute",right:"440px",top:"80px",zIndex:1}}/>
          <Image src="/hero.png" alt="Hero" width={875} height={935} style={{position:"absolute",right:"59px",zIndex:0}}/>
        </div>
    </div>
  )
}

export default Hero