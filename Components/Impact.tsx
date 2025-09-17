import React from "react";

const Impact = () => {
  return (
    <div className=" flex flex-col gap-5 w-[90%] text-start justify-start ">
      <span className="text-5xl font-bold " style={{ color: "#015CB5" }}>
        Our Impact
      </span>
      <span className="text-m font-thin text-white ">
        Being a leading B2B Branding & Website Agency in India, we understand
        that the value of branding goes far beyond aesthetics. It is not just
        about how something looks or <br />
        sounds. It is about the story, confidence, and clarity you discover in
        the process—the very essence that creates a powerful emotional and
        financial return. <br /> This process enables your brand to
      </span>
      <div className="text-white text-xs flex flex-col gap-1">
        <p  className="text-lg font-light">
          <span className="font-bold text-lg ">.</span> Make Your Audience Say
          Yes
        </p>
        <p className="text-lg font-light">
          <span className="font-bold text-lg ">.</span> Inspire Your Team to
          Thrive
        </p>
        <p  className="text-lg font-light">
          <span className="font-bold text-lg ">.</span> Attract Serious
          Investment
        </p>
      </div>
      <button className="bg-white/15 w-[150px] backdrop-blur-md border border-white/30 text-white rounded-3xl py-2 px-1 shadow-lg hover:bg-white/25 transition">
        See All Works
      </button>



      
    </div>
  );
};

export default Impact;
