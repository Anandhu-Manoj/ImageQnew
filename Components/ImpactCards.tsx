import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ImpactCards = () => {
  return (
    <Marquee direction="right" speed={50} gradient={false}>
      <div className="flex gap-8 m-8 py-10">
        <div className="cardClass">
          {/* Image centered */}
          <div className="img mb-4">
            <Image
              src={"/cardoneimg.png"}
              width={292}
              height={218}
              alt="img"
              className="mx-auto"
            />
          </div>

          {/* Left-aligned Heading */}
          <h1 className="text-2xl font-bold mb-2">E-commerce Brand</h1>

          {/* Left-aligned Description */}
          <p className="text-sm mb-4">
            Increased online sales by 150% through targeted <br /> digital
            marketing campaigns and conversion optimization.
          </p>

          {/* Left-aligned Button */}
          <button className="border rounded-3xl bg-white w-[150px] text-black text-xs font-bold px-2 py-3">
            View Details
          </button>
        </div>
        <div className="cardClass">
          {/* Image centered */}
          <div className="img mb-4">
            <Image
              src={"/CardTwoimg.png"}
              width={292}
              height={218}
              alt="img"
              className="mx-auto"
            />
          </div>

          {/* Left-aligned Heading */}
          <h1 className="text-2xl font-bold mb-2">Tech Services Company</h1>

          {/* Left-aligned Description */}
          <p className="text-sm mb-4">
            Increased online sales by 150% through targeted <br /> digital
            marketing campaigns and conversion optimization.
          </p>

          {/* Left-aligned Button */}
          <button className="border rounded-3xl bg-white w-[150px] text-black text-xs font-bold px-2 py-3">
            View Details
          </button>
        </div>
        <div className="cardClass">
          {/* Image centered */}
          <div className="img mb-4">
            <Image
              src={"/cardthreeimg.png"}
              width={292}
              height={218}
              alt="img"
              className="mx-auto"
            />
          </div>

          {/* Left-aligned Heading */}
          <h1 className="text-2xl font-bold mb-2">Healthcare Provider</h1>

          {/* Left-aligned Description */}
          <p className="text-sm mb-4">
            Increased online sales by 150% through targeted <br /> digital
            marketing campaigns and conversion optimization.
          </p>

          {/* Left-aligned Button */}
          <button className="border rounded-3xl bg-white w-[150px] text-black text-xs font-bold px-2 py-3">
            View Details
          </button>
        </div>
        <div className="cardClass">
          {/* Image centered */}
          <div className="img mb-4">
            <Image
              src={"/cardoneimg.png"}
              width={292}
              height={218}
              alt="img"
              className="mx-auto"
            />
          </div>

          {/* Left-aligned Heading */}
          <h1 className="text-2xl font-bold mb-2">Tech Services Company</h1>

          {/* Left-aligned Description */}
          <p className="text-sm mb-4">
            Increased online sales by 150% through targeted <br /> digital
            marketing campaigns and conversion optimization.
          </p>

          {/* Left-aligned Button */}
          <button className="border rounded-3xl bg-white w-[150px] text-black text-xs font-bold px-2 py-3">
            View Details
          </button>
        </div>
        
  
      </div>
    </Marquee>
  );
};

export default ImpactCards;
