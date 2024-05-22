"use client";
// import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
function Baner() {
  //   const t = useTranslations("Index");
  return (
    <div
      id="accueil"
      className="relative w-full bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90% bg-transparent"
    >
      <div>
        <div className="flex justify-center items-center mx-4 flex-col ">
          <div className="container  max-md:flex-col-reverse gap-y-4 flex justify-between items-center py-10 flex-wrap">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="max-[1024px]:w-[50%]  max-md:w-full bottom-4 relative  max-[1030px]:w-full max-[1030px]:flex max-[1030px]:flex-col max-[1030px]:justify-center max-[1030px]:items-center"
            >
              <motion.h1 className="w-full text-[60px] capitalize max-md:text-[50px] text-white font-[1000]">
                Download app, <br></br> Jon Easy
              </motion.h1>
              <p className="my-10 w-full capitalize text-lg  max-md:text-[17px] font-[300] text-white">
                Download Rooder driver opp from plays crois <br></br> account
                use your car and drive by yourself <br></br>get ride and earn
                more money
              </p>
              <div className="flex gap-4 max-sm:flex-wrap w-full  ">
                <div className="max-[1024px]:w-[200px]  h-[80px]  flex  justify-evenly items-center capitalize bg-[#4C443E] cursor-pointer  p-2 flex-wrap max-md:text-center text-white  rounded-lg">
                  <Image
                    src="/stores.png"
                    alt="iphone x"
                    width={60}
                    height={60}
                  />
                  <div className="text-lg max-md:text-[15px] font-[300] text-white">
                    <p> play stores</p>
                  </div>
                </div>
                <div className="max-[1024px]:w-[200px] h-[80px]  flex justify-evenly items-center capitalize bg-[#4C443E] cursor-pointer  p-2 flex-wrap max-md:text-center text-white  rounded-lg">
                  <Image
                    src="/appel.png"
                    alt="iphone x"
                    width={60}
                    height={60}
                  />
                  <div className="text-lg max-md:text-[15px] font-[300] text-white">
                    <p>App stores</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="max-md:w-full max-[1024px]:w-[50%] relative  bottom-9  max-[1030px]:w-full max-[1030px]:flex max-[1030px]:flex-col max-[1030px]:justify-center max-[1030px]:items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="iphone"
              >
                <Image
                  src="/iphone.png"
                  alt="iphone"
                  width={350}
                  height={350}
                ></Image>
              </motion.div>

              <div className="animation max-[280px]:w-[270px] bg-green-600 max-[280px]:left-[-10px]  max-[280px]:bottom-[350px] max-[1030px]:w-[350px] max-[950px]:right-2  flex justify-evenly items-center py-4 rounded-lg text-white shadow-lg font-bold capitalize absolute w-full  right-20 bottom-[500px] max-[344px]:hidden">
                <div className="bg-white flex justify-center items-center rounded-full h-[40px] w-[40px]  ">
                  <Image
                    src="/coche.png"
                    alt="iphone x"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-lg max-md:text-[15px]">
                  Accept custommmer Rode Request
                </p>
              </div>

              <div className="animation  max-[280px]:w-[270px]  bg-red-600  max-[1030px]:w-[350px] flex justify-evenly items-center py-4 rounded-lg text-white shadow-lg font-bold capitalize absolute w-full   left-[120px] bottom-[150px]  max-[1800px]:bottom-[150px] max-[1800px]:left-[10px] max-[1082px]:left-[-5px] max-[344px]:hidden">
                <div className="bg-white flex justify-center items-center rounded-full h-[40px] w-[40px]  ">
                  <Image
                    src="/coche.png"
                    alt="iphone x"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-lg max-md:text-[15px]">
                  Accept custommmer Error
                </p>
              </div>

              <div className="circle bottom-[260px] animation border-white absolute shadow-lg max-[884px]:right-[80px] max-[280px]:left-[22px]   right-[200px] max-md:right-[80px]  flex justify-center items-center border-8 overflow-hidden  rounded-full w-[200px] h-[200px]">
                <Image
                  src="/profil.jpg"
                  alt="iphone x"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="waves w-full -z-20  bg-white max-[1278px]:bg-red-400 ">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
      </div>
    </div>
  );
}

export default Baner;
