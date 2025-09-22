import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    
   <div className="flex flex-col md:flex-row m-8 w-[90%] mt-5 gap-10 md:gap-16 relative z-10">
    <Image className="absolute left-[-313] top-[-50] opacity-50 scale-150" src={'/background.png'} alt="bg" width={616} height={616}/>
    <Image className="absolute right-[-313] bottom-[-150]  scale-150 z-[-1]" src={'/background.png'} alt="bg" width={616} height={616}/>
  {/* Left Column */}
  <div className="flex flex-col md:w-[40%]">
    <span className="text-start text-[48px] font-bold customblue mb-3 leading-snug">
      Comprehensive <br /> Marketing Solutions
    </span>
    <span className="text-white text-[16px] font-light">
      We offer end to end service to help you achive your <br /> buisness goal
    </span>
  </div>

  {/* Right Column */}
  <div className="flex flex-col md:w-[55%] gap-10">
    {/* Map over your items to avoid repetition */}
    {[
      {
        title: "GTM Strategy Planning",
        desc: "Develop comprehensive go-to-market strategies tailored to your business objectives."
      },
      {
        title: "Brand Strategy & Design",
        desc: "Create compelling brand identities and visual systems that resonate with your target audience."
      },
      {
        title: "Marketing Automation",
        desc: "Streamline your marketing processes with intelligent automation and AI-powered workflows."
      },
      {
        title: "Digital Marketing",
        desc: "Implement effective digital marketing campaigns to reach your target audience."
      },
      {
        title: "Media & PR",
        desc: "Build brand awareness and credibility through strategic media relations and public relations campaigns."
      },
      {
        title: "Performance Analytics",
        desc: "Track, measure, and optimize your marketing performance for maximum ROI."
      }
    ].map((item, index) => (
      <div key={index}>
        <div className="flex justify-between gap-5">
          <span className={index < 4 ? "text-[32px] font-medium text-white" : "text-3xl font-normal text-white"}>
            {item.title}
          </span>
          <FiArrowUpRight className="text-white text-3xl ms-10" />
        </div>
        <p className="text-[16px] font-light text-white mt-3 mb-8">
          {item.desc}
        </p>
        {index !== 5 && <hr className="border-t border-gray-500 opacity-50" />}
      </div>
    ))}
  </div>
</div>

  );
};

export default About;
