import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    
    <div className="flex m-8 w-[90%]  mt-5">
      <div className="flex flex-col " style={{width:"40%"}}>
        <span className="text-start text-5xl font-bold customblue mb-3 leading-snug">
          Comprehensive <br /> Marketing Solutions
        </span>
        <span className="text-white text-lg font-thin">
          We offer end to end service to help you achive your <br /> buisness
          goal
        </span>
      </div>
      <div className="flex flex-col  gap-10" style={{width:"55%"}}>
        {/* About discription */}
        <div className="">
          <div className="flex justify-between gap-5">
            <span className="text-3xl font-normal text-white">
              GTM Strategy Planning
            </span>
            <span>
              <FiArrowUpRight className="text-white text-3xl ms-10" />
            </span>
          </div>
          <p className="text-m font-thin text-white mt-3 mb-8">
            Develop comprehensive go-to-market strategies tailored to your
            business objectives.
          </p>
          <hr className="border-t border-gray-500 opacity-50" />
        </div>
        {/* About discription */}
        <div className="">
          <div className="flex justify-between gap-5">
            <span className="text-3xl font-normal text-white">
              Brand Strategy & Design
            </span>
            <span>
              <FiArrowUpRight className="text-white text-3xl ms-10" />
            </span>
          </div>
           <p className="text-m font-thin text-white mt-3 mb-8">
            Create compelling brand identities and visual systems that resonate
            with your target audience.
          </p>
          <hr className="border-t border-gray-500 opacity-50" />
        </div>
        {/* About discription */}
        <div className="">
          <div className="flex justify-between gap-5">
            <span className="text-3xl font-normal text-white">
              Marketing Automation
            </span>
            <span>
              <FiArrowUpRight className="text-white text-3xl ms-10" />
            </span>
          </div>
           <p className="text-m font-thin text-white mt-3 mb-8">
           Streamline your marketing processes with intelligent automation and AI-powered workflows.
          </p>
          <hr className="border-t border-gray-500 opacity-50" />
        </div>
        {/* About discription */}
        <div className="">
          <div className="flex justify-between gap-5">
            <span className="text-2xl font-semibold text-white">
              Digital Marketing
            </span>
            <span>
              <FiArrowUpRight className="text-white text-3xl ms-10" />
            </span>
          </div>
           <p className="text-m font-thin text-white mt-3 mb-8">
            Implement effective digital marketing campaigns to reach your target audience.
          </p>
          <hr className="border-t border-gray-500 opacity-50" />
        </div>
        {/* About discription */}
        <div className="">
          <div className="flex justify-between gap-5">
            <span className="text-3xl font-normal text-white">
              Media & PR
            </span>
            <span>
              <FiArrowUpRight className="text-white text-3xl ms-10" />
            </span>
          </div>
           <p className="text-m font-thin text-white mt-3 mb-8">
            Build brand awareness and credibility through strategic media relations and public relations campaigns.
          </p>
          <hr className="border-t border-gray-500 opacity-50" />
        </div>
        {/* About discription */}
        <div className="">
          <div className="flex justify-between gap-5">
            <span className="text-3xl font-normal text-white">
              Performance Analytics
            </span>
            <span>
              <FiArrowUpRight className="text-white text-3xl ms-10" />
            </span>
          </div>
          <p className="text-m font-thin text-white mt-3 mb-8">
            Track, measure, and optimize your marketing performance for maximum ROI.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
