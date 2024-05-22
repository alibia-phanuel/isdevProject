"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function SectionFoor() {
  return (
    <div className="flex justify-center items-center  mt-[100px]  px-4">
      <div className="container flex justify-between ">
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90% rounded-full w-[500px] h-[500px]  max-[1061px]:h-[300px] max-[1061px]:w-[300px] max-md:hidden flex  justify-center items-center mx-8 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative w-[300px] h-[600px] max-[1061px]:h-[550px] max-[1061px]:w-[250px] "
            >
              <Image
                src="/sectwo.png"
                alt="iphone x"
                fill
                className="animation"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 flex-col ">
          <div className="flex gap-4 flex-wrap">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group"
            >
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
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group"
            >
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
            </motion.div>
          </div>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFoor;
