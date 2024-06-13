"use client";
// import { useTranslations } from "next-intl";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io5";
import Image from "next/image";
import localFont from "next/font/local";
const myFonts = localFont({
  src: "../../../Fonts/Google_Sans_Bold.ttf",
  display: "swap",
});
import { motion } from "framer-motion";
function Baner() {
  //   const t = useTranslations("Index");
  return (
    <div className="flex justify-center items-center mx-4 ">
      <div className="container h-full  flex my-[100px]  max-[770px]:flex-col-reverse  baner max-[1137px]:justify-center  ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="ml-11 max-[1137px]:ml-0 flex flex-col  max-[1137px]:items-center w-[30%] baneretxt max-[768px]:justify-center  max-[1137px]:w-full max-[1137px]:text-center max-[768px]:text-center max-[768px]:items-center max-[768px]:w-full  z-20  max-[1137px]:w-[50%]"
        >
          <motion.h1 className="w-full max-[1137px]:justify-center  text-[50px] max-sm:text-[30px] capitalize max-md:text-[50px]    2xl:text-10xl flex  bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            <span className={`${myFonts.className}`}>
              {" "}
              Download App Jon Easy and make your business easier managed
            </span>{" "}
            {/**to enjoy your day everyday*/}
          </motion.h1>
          <p className="my-10 text-lg text-gray-600 sm:text-xl max-w-2xl  w-full">
            Download Jon Easy opp from plays crois <br></br> account use your
            car and drive by yourself <br></br>get ride and earn more money
          </p>
          <div className="flex gap-2 max-sm:flex-wrap w-full max-[1137px]:items-center  max-[1137px]:justify-center max-[768px]:items-center  max-[768px]:justify-center ">
            <div className="font-bold text-2xl max-[500]:text-xl  p-5 max-md:p-2 gap-4  flex items-center justify-center capitalize bg-gradient-to-r from-green-400 to-green-500 cursor-pointer flex-wrap max-md:text-center text-white  rounded-lg">
              <IoLogoGooglePlaystore className="text-[40px] " />
              <div>
                <p> play stores</p>
              </div>
            </div>
            <div className="font-bold text-2xl max-[500]:text-xl  p-5 max-md:p-2 gap-4   flex  items-center justify-center capitalize bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 cursor-pointer   flex-wrap max-md:text-center text-white  rounded-lg">
              <IoLogoApple className="text-[40px] " />
              <di>
                <p>App stores</p>
              </di>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="animation relative max-[1137px]:bottom-10  mr-11 max-[1137px]:mr-0 w-[900px] h-[609px] banerImg  max-[1137px]:w-full max-[1137px]:h-full"
        >
          <Image src="/home-image.png" alt="iphone" sizes="1800px" fill></Image>
        </motion.div>
      </div>
    </div>
  );
}

export default Baner;
