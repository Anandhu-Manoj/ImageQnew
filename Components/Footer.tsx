import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-black min-h-[489px] w-full flex items-center  shadow-inner">
      <div className="container max-w-5xl w-full text-center flex justify-between gap-x-40 ms-30">
        <div className="footer-container ">
          <span className="text-2xl w-full mb-8">
            {" "}
            123 Market St. #22B <br />
            Charlottesville, California <br /> 44635
          </span>
          <span className=" text-sm mb-2">(434) 546-4356 <hr className="w-[120px]" /></span>
          <span className=" text-sm">contact@lift.agency <hr className="w-[135px]"/></span>
        </div>
        <div className="footer-container font-light text-xs">
            <span>About</span>
            <span>Growers</span>
            <span>Merchants</span>
            <span>Partners</span>
            <span>Contact</span>
            
        </div>
        <div className="footer-container font-light text-xs">
            <span>facebook</span>
            <span>Twitter</span>
            <span>Linkdin</span>
            <span>Instagram</span>
        </div>
        <div className="footer-container font-light text-xs">
            <span>@2020 lift media all rights <br /> reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
