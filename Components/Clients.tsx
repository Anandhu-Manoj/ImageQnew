import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className='flex items-center justify-center gap-20  z-10 mb-10'>
        <div className="imgcontainer opacity-25 ">
            <Image  src={"/carestack.png"} alt='client' width={199} height={24}/>
        </div>
        <div className="imgcontainer ">
            <Image  src={"/orthoFx.png"} alt='client' width={139} height={22}/>
        </div>
        <div className="imgcontainer opacity-25">
            <Image  src={"/carestack.png"} alt='client' width={200} height={200}/>
        </div>
        <div className="imgcontainer ">
            <Image  src={"/sedai.png"} alt='client' width={133} height={35}/>
        </div>
        <div className="imgcontainer ">
            <Image  src={"/jiffy.png"} alt='client' width={128} height={48}/>
        </div>
        
    </div>
  )
}

export default Clients