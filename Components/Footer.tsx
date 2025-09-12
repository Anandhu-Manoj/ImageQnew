import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-black min-h-[200px] w-full flex items-center justify-center shadow-inner">
      <div className="container max-w-5xl w-full text-center flex justify-between gap-x-25">
        <div className="footer-container ">
          <span className="text-xl">
            {" "}
            123 Market St. #22B <br />
            Charlottesville, California 44635
          </span>
          <span className="text-sm">(434) 546-4356</span>
          <span className="text-sm">contact@lift.agency</span>
        </div>
        <div className="footer-container ">
            <span>about</span>
            <span>Growers</span>
            <span>Merchants</span>
            <span>Partners</span>
            <span>Contact</span>
        </div>
        <div className="footer-container">
            <span>facebook</span>
            <span>Twitter</span>
            <span>Linkdin</span>
            <span>Instagram</span>
        </div>
        <div className="footer-container">
            <span>@2020 lift media all rights <br /> reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
