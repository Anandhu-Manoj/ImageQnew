import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ImpactCards = () => {
  const cards = [
    {
      src: "/iconone.png",
      title: "E-commerce Brand",
      desc: "Increased online sales by 150% through targeted <br /> digital marketing campaigns and conversion optimization.",
      bg: "linear-gradient(45deg, #000000 0%, #573CAC 67%, #56E39F 100%)",
    },
    {
      src: "/icontwo.png",
      title: "Tech Services Company",
      desc: "Increased online sales by 150% through targeted <br /> digital marketing campaigns and conversion optimization.",
      bg: "linear-gradient(135deg, #9F548A 0%, #2954E7 65%, #56E39F 100%)",
    },
    {
      src: "/iconthree.png",
      title: "Healthcare Provider",
      desc: "Increased online sales by 150% through targeted <br /> digital marketing campaigns and conversion optimization.",
      bg: "linear-gradient(225deg, #DCF763 0%, #2954E7 75%)",
    },
    {
      src: "/imagefour.png",
      title: "Tech Services Company",
      desc: "Increased online sales by 150% through targeted <br /> digital marketing campaigns and conversion optimization.",
      bg: "linear-gradient(45deg, #7E5AF2 0%, #5ABAC8 57%,#2954E7 100%)",
    },
  ];

  
  const CardsContent = (
    <div className="flex flex-col sm:flex-row flex-wrap gap-6 m-6 py-10 justify-center items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="cardClass w-full sm:w-[48%] md:w-[23%] p-4"
          style={{ background: card.bg }}
        >
          <div className="img mb-4">
            <Image
              src={card.src}
              width={138}
              height={138}
              alt="img"
              className="mx-0 opacity-30"
            />
          </div>
          <h1 className="text-[24px] font-semibold mb-4">{card.title}</h1>
          <p
            className="text-[14px] font-light mb-4"
            dangerouslySetInnerHTML={{ __html: card.desc }}
          />
          <button className="rounded-3xl bg-white w-[131px] h-[44px] text-black text-xs font-bold px-2 py-3">
            View Details
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <>
      
      <div className="hidden md:block">
        <Marquee direction="left" speed={50} gradient={false}>
          {CardsContent}
        </Marquee>
      </div>

     
      <div className="block md:hidden">{CardsContent}</div>
    </>
  );
};

export default ImpactCards;
