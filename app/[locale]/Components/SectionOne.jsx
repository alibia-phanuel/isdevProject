"use client";
import { motion } from "framer-motion";
import Image from "next/image";
function SectionOne() {
  return (
    <div id="how" className="flex justify-center items-center">
      <div className="container px-4">
        <div className="flex justify-center flex-col items-center  relative top-[100px]">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[50px] max-md:text-[40px] my-10 font-[1000] capitalize"
          >
            How Jon Easy works
          </motion.h1>

          <motion.p className="text-center max-md:text-justify  text-gray-600 text-[20px] max-md:text-[17px] mt-8">
            Download Jon Easy driver app from play store creat account use your
            and
            <br></br>
            driver by yourself get ride and earn more money
          </motion.p>
        </div>
        <div className="relative top-[120px] flex justify-between my-[250px] max-md:top-[-70px] ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" flex flex-col justify-between"
          >
            <div className="group  my-8 mx-5">
              <div className="flex justify-end">
                <h1 className="bg-green-100 flex justify-center items-center w-[80px] h-[80px] rounded-lg text-[40px] font-bold text-green-400  transition-all group-hover:text-white group-hover:bg-green-600 ">
                  1
                </h1>
              </div>
              <div className="flex  justify-end">
                <h2 className="font-bold my-3">Request a trip</h2>
              </div>
              <p className="text-right">
                Choose your pickup and the drop-all <br></br> iconne and the
                trip type that <br></br>
                meets your noorh
              </p>
            </div>
            <div className="  my-8 mx-5">
              <div className=" flex  justify-end">
                <h1 className="bg-green-600  flex justify-center items-center w-[80px] h-[80px] rounded-lg text-[40px] font-bold text-white ">
                  3
                </h1>
              </div>
              <div className="flex  justify-end">
                <h2 className="font-bold my-3">Request a trip</h2>
              </div>
              <p className="text-right">
                Choose your pickup and the drop-all <br></br> iconne and the
                trip type that <br></br>
                meets your noorh
              </p>
            </div>
          </motion.div>
          <div>
            <div className="bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90%  rounded-full w-[500px] h-[500px]  max-[1061px]:h-[300px] max-[1061px]:w-[300px] max-md:hidden flex  justify-center items-center mx-8 ">
              <div className="relative w-[300px] h-[600px] max-[1061px]:h-[550px] max-[1061px]:w-[250px] ">
                <Image
                  src="/sectwo.png"
                  alt="iphone x"
                  fill
                  className="animation"
                />
              </div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" flex flex-col justify-between"
          >
            <div className="group  my-8 mx-5">
              <div className="flex">
                <h1 className="bg-green-100 flex justify-center items-center w-[80px] h-[80px] rounded-lg text-[40px] font-bold text-green-400 transition-all group-hover:text-white group-hover:bg-green-600 ">
                  2
                </h1>
              </div>
              <div className="flex">
                <h2 className="font-bold my-3">Request a trip</h2>
              </div>
              <p className="">
                Choose your pickup and the drop-all <br></br> iconne and the
                trip type that <br></br>
                meets your noorh
              </p>
            </div>
            <div className="group  my-8 mx-5">
              <div className=" flex">
                <h1 className="bg-green-100 flex justify-center items-center w-[80px] h-[80px] rounded-lg text-[40px] font-bold text-green-400 transition-all group-hover:text-white group-hover:bg-green-600 ">
                  4
                </h1>
              </div>
              <div className="flex">
                <h2 className="font-bold my-3">Request a trip</h2>
              </div>
              <p className="">
                Choose your pickup and the drop-all <br></br> iconne and the
                trip type that <br></br>
                meets your noorh
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
