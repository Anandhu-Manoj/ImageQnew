import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className=" min-w-screen text-white flex h-screen sm:flex flex-col "
      style={{ position: "relative" }}
    >
      <div className="flex w-1/2  container">
        <div
          className="text-start flex  flex-col justify-center "
          style={{
            position: "absolute",
            left: "50px",
            top: "180px",
            zIndex: "10",
          }}
        >
          <h1 className="text-[60px] font-semibold m-5 ">Transform Your GTM</h1>
          <p className="text-wrap ms-5 text-[16px] font-[400] text-white mb-5">
            ImageQ helps businesses scale revenue through Go-To-Market
            Planning, Brand <br /> Strategy Planning, Agentic AI based Marketing
            Automation, Digital <br /> Marketing implementation and
            strategic Media Communication.
          </p>
          <div className="flex gap-5 ms-5 mt-3 ">
            <button className="relative bg-white/15 backdrop-blur-md border border-white/20 text-white font-inter rounded-4xl py-2 px-8 shadow-lg overflow-hidden  hover:bg-white/25 transition">
              Book A Consultation
              {/* Top-left rim shine */}
              <span className="absolute top-0 left-0 w-80 h-16 rounded-tl-3xl border-t-2 border-l-2 border-white/40 pointer-events-none"></span>
              {/* Bottom-right rim shine */}
              <span className="absolute bottom-0 right-0 w-16 h-16 rounded-br-3xl border-b-1 border-r-1 border-white/40 pointer-events-none"></span>
            </button>

            <button className="relative bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-3xl w-[204px] h-[52px] py-2 px-6 shadow-lg hover:bg-white/25 transition overflow-hidden">
              Dont Click This
              {/* Top-left rim shine */}
              <span className="absolute top-0 left-0 w-50 h-16 rounded-tl-3xl border-t-1 border-l-3 border-white/40  pointer-events-none"></span>
              {/* Bottom-right rim shine */}
              <span className="absolute bottom-0 right-0 w-16 h-16 rounded-br-3xl border-b-1 border-r-2 border-white/20 pointer-events-none"></span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/background.png"
          alt="Hero"
          width={835}
          height={835}
          className="scale-x-150 scale-y-90"
          style={{
            position: "absolute",
            right: "480px",
            top: "80px",
            zIndex: 1,
          }}
        />
        <Image
          src="/hero.png"
          alt="Hero"
          width={875}
          height={935}
          style={{ position: "absolute", right: "59px", zIndex: 0 }}
        />
      </div>
    </div>
  );
};

export default Hero;
