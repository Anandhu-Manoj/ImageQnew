import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className='flex items-center justify-center gap-10 m-8 z-10'>
        <div className="imgcontainer ">
            <Image  src={"/carestack.png"} alt='client' width={200} height={200}/>
        </div>
        <div className="imgcontainer ">
            <Image  src={"/carestack.png"} alt='client' width={200} height={200}/>
        </div>
        <div className="imgcontainer ">
            <Image  src={"/carestack.png"} alt='client' width={200} height={200}/>
        </div>
        <div className="imgcontainer ">
            <Image  src={"/carestack.png"} alt='client' width={200} height={200}/>
        </div>
        <div className="imgcontainer ">
            <Image  src={"/carestack.png"} alt='client' width={200} height={200}/>
        </div>
        <div className="imgcontainer ">
            <Image  src={"/carestack.png"} alt='client' width={200} height={200}/>
        </div>
    </div>
  )
}

export default Clients