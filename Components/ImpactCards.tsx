import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ImpactCards = () => {
  return (
    <Marquee direction="right" speed={50} gradient={false}>
      <div className="flex flex-col md:flex-row gap-8 m-6 py-10 justify-center items-center">
        <div
          className="cardClass  "
          style={{
            background:
              "linear-gradient(45deg, #000000 0%, #573CAC 67%, #56E39F 100%)",
          }}
        >
          {/* Image centered */}
          <div className="img mb-4 ">
            <Image
              src={"/iconone.png"}
              width={138}
              height={138}
              alt="img"
              className="mx-0 opacity-30"
            />
          </div>

          {/* Left-aligned Heading */}
          <h1 className="text-2xl font-bold mb-4 ">E-commerce Brand</h1>

          {/* Left-aligned Description */}
          <p className="text-sm font-light mb-4">
            Increased online sales by 150% through targeted <br /> digital
            marketing campaigns and conversion optimization.
          </p>

          {/* Left-aligned Button */}
          <button className=" rounded-3xl bg-white w-[131px] h-[44px] text-black text-xs font-bold px-2 py-3">
            View Details
          </button>
        </div>
        <div
          className="cardClass"
          style={{
            background:
              "linear-gradient(135deg, #9F548A 0%, #2954E7 65%, #56E39F 100%)",
          }}
        >
          {/* Image centered */}
          <div className="img mb-4">
            <Image
              src={"/icontwo.png"}
              width={138}
              height={138}
              alt="img"
              className="mx-0 opacity-30"
            />
          </div>

          {/* Left-aligned Heading */}
          <h1 className="text-2xl font-bold mb-4">Tech Services Company</h1>

          {/* Left-aligned Description */}
          <p className="text-sm mb-4 font-light">
            Increased online sales by 150% through targeted <br /> digital
            marketing campaigns and conversion optimization.
          </p>

          {/* Left-aligned Button */}
          <button className=" rounded-3xl bg-white w-[131px] h-[44px] text-black text-xs font-bold px-2 py-3">
            {" "}
            View Details
          </button>
        </div>
        <div
          className="cardClass"
          style={{
            background: "linear-gradient(225deg, #DCF763 0%, #2954E7 75%)",
          }}
        >
          {/* Image centered */}
          <div className="img mb-4">
            <Image
              src={"/iconthree.png"}
              width={138}
              height={138}
              alt="img"
              className="mx-0 opacity-30"
            />
          </div>

          {/* Left-aligned Heading */}
          <h1 className="text-2xl font-bold mb-4">Healthcare Provider</h1>

          {/* Left-aligned Description */}
          <p className="text-sm font-light mb-4">
            Increased online sales by 150% through targeted <br /> digital
            marketing campaigns and conversion optimization.
          </p>

          {/* Left-aligned Button */}
          <button className=" rounded-3xl bg-white w-[131px] h-[44px] text-black text-xs font-bold px-2 py-3">
            {" "}
            View Details
          </button>
        </div>
        <div
          className="cardClass"
          style={{
            background:
              "linear-gradient(45deg, #7E5AF2 0%, #5ABAC8 57%,#2954E7 100%)",
          }}
        >
          {/* Image centered */}
          <div className="img mb-4">
            <Image
              src={"/imagefour.png"}
              width={138}
              height={138}
              alt="img"
              className="mx-0 opacity-30"
            />
          </div>

          {/* Left-aligned Heading */}
          <h1 className="text-2xl font-bold mb-4">Tech Services Company</h1>

          {/* Left-aligned Description */}
          <p className="text-sm mb-4 font-light">
            Increased online sales by 150% through targeted <br /> digital
            marketing campaigns and conversion optimization.
          </p>

          {/* Left-aligned Button */}
          <button className=" rounded-3xl bg-white w-[131px] h-[44px] text-black text-xs font-bold px-2 py-3">
            {" "}
            View Details
          </button>
        </div>
      </div>
    </Marquee>
  );
};

export default ImpactCards;
