"use client";
import { motion } from "framer-motion";

import imgOne from "../../../public/assets/time-tracking.png";
import imgTwo from "../../../public/assets/tracking-app (1).png";
import imgThree from "../../../public/assets/tracking-app.png";
import imgFour from "../../../public/assets/mobile-app.png";
import Image from "next/image";
function WhyJonEasy() {
  return (
    <div className="flex justify-center items-center">
      <div
        id="WhyJonEasy"
        className="  flex  flex-col  items-center justify-center relative  px-4 my-[100px] bg-white container rounded-lg"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-bold my-[50px] text-[50px] max-sm:text-[30px] capitalize max-md:text-[50px] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent"
        >
          Why Jon Easy ?
        </motion.h2>
        <div className="flex w-full justify-center items-center mx-4">
          <div className="container flex items-center flex-wrap  justify-center gap-4 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative  max-[768px]:w-[100%]"
            >
              {/* Div avec fond transparent */}

              {/* Balise vidéo */}
              <video controls autoPlay muted loop className="">
                <source src="videoComplet01.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="text-[30px] font-bold shadow p-4 hover:shadow-2xl transition-all text-center my-[40px]">
                Take{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Control of Everything
                </span>{" "}
                <br />
                in You Hands.
              </h1>
              <p className="my-[90px] text-gray-600 text-lg max-md:text-[17px] text-center ">
                There are many variations of passages of Lorem Ipsum available,
                but
                <br />
                the majority have suffered alteration in some form, by injected
                <br />
                humour, or randomised words which
              </p>
              <div className="flex flex-wrap justify-center items-center md:gap-16 max-md:gap-8">
                <div className="flex gap-4 my-[20px] justify-center items-center ">
                  <div className="icone relative flex justify-center items-center ">
                    <Image
                      src={imgOne}
                      alt="projetImg"
                      width={70}
                      height={70}
                    ></Image>
                  </div>
                  <div>
                    <h1 className="font-bold capitalize text-[20px]">Time</h1>
                    <p className="text-gray-600 text-lg max-md:text-[17px]">
                      {" "}
                      ontrary to popular belief, Lorem Ipsum is not simply
                      random <br></br>
                      text. It has roots in a piece of classical
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 my-[20px] justify-center items-center ">
                  <div className="icone relative flex justify-center items-center ">
                    <Image
                      src={imgTwo}
                      alt="projetImg"
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <h1 className="font-bold capitalize text-[20px]">
                      satellite
                    </h1>
                    <p className="text-gray-600 text-lg max-md:text-[17px]">
                      {" "}
                      ontrary to popular belief, Lorem Ipsum is not simply
                      random <br></br>
                      text. It has roots in a piece of classical
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 my-[20px] justify-center items-center capitalize ">
                  <div className="icone relative  flex justify-center items-center ">
                    <Image
                      src={imgThree}
                      alt="projetImg"
                      width={70}
                      height={70}
                    ></Image>
                  </div>
                  <div>
                    <h1 className="font-bold capitalize text-[20px]">
                      partager votre localisation
                    </h1>
                    <p className="text-gray-600 text-lg max-md:text-[17px]">
                      {" "}
                      ontrary to popular belief, Lorem Ipsum is not simply
                      random <br></br>
                      text. It has roots in a piece of classical
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 my-[20px] justify-center items-center capitalize ">
                  <div className="icone relative  flex justify-center items-center ">
                    <Image
                      src={imgFour}
                      alt="projetImg"
                      width={70}
                      height={70}
                    ></Image>
                  </div>
                  <div>
                    <h1 className="font-bold capitalize text-[20px]">
                      suivre votre consommation
                    </h1>
                    <p className="text-gray-600 text-lg max-md:text-[17px]">
                      {" "}
                      ontrary to popular belief, Lorem Ipsum is not simply
                      random <br></br>
                      text. It has roots in a piece of classical
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyJonEasy;
