import Image from "next/image";
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
          {/* firstcontainer */}
          <div
            style={{ position: "relative" }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-[799px] h-[323px] flex flex-col items-center text-white"
          >
            <div className="absolute text-start top-25 left-5  ">
              <h2  className="font-bold text-xl">Proven track record of success</h2>
              <p>With a proven track record of success, we help our clients achieve their <br />
               goals. Our experience shows we can deliver results.</p>

            </div>
            <div className="imgcontainer">
              <Image
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  zIndex: "0",
                }}
                src="/Rectangleone.png"
                alt="approachimage"
                width={697}
                height={332}
              />
              <Image
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  zIndex: "0",
                }}
                src="/Rectangletwo.png"
                alt="approachimage"
                width={670}
                height={309}
              />
              <Image
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  zIndex: "0",
                }}
                src="/graph.png"
                alt="approachimage"
                width={642}
                height={315}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            
            <div
              style={{ position: "relative" }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-[439px] h-[308px] flex flex-col items-center text-white"
            >
              <div className="absolute top-3 left-5 text-start ">
                <h2 className="text-xl font-bold">Customized strategies for <br /> your business</h2>
                <p>We craft customized strategies specifically for your <br /> business, ensuring every solution is tailored to your <br /> unique goals.</p>
              </div>
              
              <Image
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "67px",
                  zIndex: "0",
                }}
                src="/semi.png"
                alt="approachimage"
                width={340}
                height={340}
              />
              <Image
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "121.5px",
                  zIndex: "0",
                }}
                src="/semi.png"
                alt="approachimage"
                width={231}
                height={231}
              />
              <Image
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "171px",
                  zIndex: "0",
                }}
                src="/semi.png"
                alt="approachimage"
                width={131}
                height={131}
              />
              <Image
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "207px",
                  zIndex: 1,
                }}
                src="/semi.png"
                alt="approachimage"
                width={59}
                height={59}
              />
              <Image
                style={{
                  position: "absolute",
                  bottom: "5px",
                  left: "140px",
                  zIndex: 0,
                }}
                src="/Vector.png"
                alt="approachimage"
                width={193.5}
                height={144.43}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "260px",
                  left: "213px",
                  zIndex: 10,
                }}
                src="/dot.png"
                alt="approachimage"
                width={9}
                height={9}
              />

              <Image
                style={{
                  position: "absolute",
                  top: "214px",
                  left: "257px",
                  zIndex: 10,
                }}
                src="/dot.png"
                alt="approachimage"
                width={9}
                height={9}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "194px",
                  left: "162px",
                  zIndex: 10,
                }}
                src="/dot.png"
                alt="approachimage"
                width={9}
                height={9}
              />
              <div
                style={{
                  position: "absolute",
                  top: "260px",
                  left: "213px",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  border: "1px solid white",
                  backgroundColor: "white", // or another color you want
                  zIndex: 10,
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "194px",
                  left: "162px",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  border: "1px solid white",
                  backgroundColor: "white", // or another color you want
                  zIndex: 10,
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "214px",
                  left: "257px",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  border: "1px solid white",
                  backgroundColor: "white", // or another color you want
                  zIndex: 10,
                }}
              ></div>
            </div>
            <div
              style={{ position: "relative" }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-[349px] h-[308px] flex flex-col items-center text-white"
            >
              <div className="text-start absolute top-2.5 left-5 ">
                <h1 className="text-xl font-bold mb-5 ">
                  Transparent reporting and communication
                </h1>
                <p className="text-xs">We believe in transparent reporting and <br /> communication, so you will always be in the loop <br /> about your progress and results.</p>

              </div>
              <Image
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  zIndex: "0",
                }}
                src="/Ellipseone.png"
                alt="approachimage"
                width={143}
                height={143}
              />
              <Image
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  zIndex: "0",
                }}
                src="/Ellipsetwo.png"
                alt="approachimage"
                width={143}
                height={143}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "203px",
                  left: "22px",
                  zIndex: "0",
                }}
                src="/Ellipsethree.png"
                alt="approachimage"
                width={29}
                height={29}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "203px",
                  right: "22px",
                  zIndex: "0",
                }}
                src="/Ellipsethree.png"
                alt="approachimage"
                width={29}
                height={29}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "151px",
                  right: "156px",
                  zIndex: "0",
                }}
                src="/Ellipsefour.png"
                alt="approachimage"
                width={44}
                height={44}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "177.68px",
                  right: "53px",
                  zIndex: "0",
                }}
                src="/Line.png"
                alt="approachimage"
                width={250.1}
                height={32.7}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "166px",
                  right: "166px",
                  zIndex: "0",
                }}
                src="/message.png"
                alt="approachimage"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div
            style={{ position: "relative" }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 w-[477px] h-[648px] flex flex-col items-center text-white"
          >
            <div className="absolute top-10 left-5 text-start">
              <h1 className="xl text-xl font-bold">End-to-end implementation <br /> support</h1>
              <p className="text-xs">We believe in transparent reporting and communication, so you will <br /> always be in the loop about your progress and results.</p>

            </div>
            <Image
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                zIndex: "0",
              }}
              src="/squareone.png"
              alt="approachimage"
              width={447}
              height={562}
            />
            <Image
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                zIndex: "0",
              }}
              src="/squareone.png"
              alt="approachimage"
              width={417}
              height={532}
            />
            <Image
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                zIndex: "0",
              }}
              src="/squareone.png"
              alt="approachimage"
              width={397}
              height={512}
            />
            <Image
              style={{
                position: "absolute",
                top: "270px",
                left: "117px",
                zIndex: "0",
              }}
              src="/Group.png"
              alt="approachimage"
              width={60}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
