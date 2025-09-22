import React from "react";

const Consultation = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-[400px]">
      <span className="text-[48px] font-bold customblue mb-3  leading-snug">
        Ready to Transform <br />
        Your Marketing?
      </span>
      <p className="text-white text-[16px] font-light m-4">
        Schedule a consultation with our team to discuss how we can help you{" "}
        <br /> achieve your business goals.
      </p>
      <button className="relative bg-white/15 backdrop-blur-md border border-white/30 text-white rounded-4xl py-3 px-2 w-[204px] h-[52px] shadow-lg hover:bg-white/25 transition">
        <span className="absolute top-0 left-0 w-8 h-8 rounded-tl-3xl border-t-1 border-l-3 border-white/40 pointer-events-none"></span>
        {/* Bottom-right rim shine */}
        <span className="absolute bottom-0 right-0 w-12 h-8 rounded-br-3xl border-b-1 border-r-1 border-white/40 pointer-events-none"></span>
        <span className="text-[14px]">Book A consultation</span>
      </button>
    </div>
  );
};

export default Consultation;
