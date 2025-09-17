import React from "react";

const Consultation = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-[400px]">
      <span className="text-5xl font-bold customblue mb-3  leading-snug">
        Ready to Transform <br />
        Your Marketing?
      </span>
      <p className="text-white m-4">
        Schedule a consultation with our team to discuss how we can help you{" "}
        <br /> achieve your business goals.
      </p>
      <button className="bg-white/15 backdrop-blur-md border border-white/30 text-white rounded-3xl py-3 px-4 w-[200px] shadow-lg hover:bg-white/25 transition">Book A consultation</button>
    </div>
  );
};

export default Consultation;
