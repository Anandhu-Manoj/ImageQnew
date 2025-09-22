import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-20 z-10 mb-10">
  <div className="imgcontainer opacity-40">
    <Image
      src={"/carestack.png"}
      alt="client"
      width={199}
      height={24}
      className="w-[100px] sm:w-[150px] md:w-[199px] h-auto"
    />
  </div>
  <div className="imgcontainer ">
    <Image
      src={"/orthoFx.png"}
      alt="client"
      width={139}
      height={22}
      className="w-[80px] sm:w-[120px] md:w-[139px] h-auto"
    />
  </div>
  <div className="imgcontainer opacity-40">
    <Image
      src={"/carestack.png"}
      alt="client"
      width={200}
      height={200}
      className="w-[80px] sm:w-[120px] md:w-[200px] h-auto"
    />
  </div>
  <div className="imgcontainer">
    <Image
      src={"/sedai.png"}
      alt="client"
      width={133}
      height={35}
      className="w-[70px] sm:w-[100px] md:w-[133px] h-auto"
    />
  </div>
  <div className="imgcontainer">
    <Image
      src={"/jiffy.png"}
      alt="client"
      width={128}
      height={48}
      className="w-[70px] sm:w-[100px] md:w-[128px] h-auto"
    />
  </div>
</div>

  )
}

export default Clients