import React from "react";

const Approach = () => {
  return (
    <div className=" flex flex-col gap-5 w-[90%] text-start justify-start ">
      <span className="text-4xl font-bold " style={{ color: "#015CB5" }}>
        Our Approach
      </span>
      <span className="text-xs text-white text-wrap ">
        At ImageQ, we believe in data-driven strategies that deliver <br />{" "}
        measurable results. Our team of marketing experts combines industry{" "}
        <br /> knowledge with innovative techniques to help businesses achieve{" "}
        <br /> sustainable growth.
      </span>

      <div className="flex gap-3 justify-start  ">
        <div className="flex flex-col">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-[799px] h-[323px] flex flex-col items-center text-white"></div>
          <div className="flex gap-3 mt-3">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-[439px] h-[308px] flex flex-col items-center text-white">

            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-[349px] h-[308px] flex flex-col items-center text-white">

            </div>

          </div>
        </div>
        <div className="">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-[477px] h-[648px] flex flex-col items-center text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
