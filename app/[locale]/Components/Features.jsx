"use client";
import { motion } from "framer-motion";
import { IoMdStar } from "react-icons/io";
import { FaStarHalfStroke } from "react-icons/fa6";
function Features() {
  return (
    <div className="bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90% w-full flex justify-center items-center  relative px-4 mb-[100px]">
      <div className="flex container justify-between items-center flex-wrap">
        <div className="text-white flex flex-col w-full   justify-center items-center  max-sm:text-center">
          <h1 className="font-bold text-[30px] max-md:text-[18px] mt-10">
            Features
          </h1>
          <p className="my-[25px] text-white text-lg max-md:text-[17px] ">
            Lorem ipsum placeholder placeholderpla
            ceholderplaceholderplaceholder
            <br />
            font-bold Lorem ipsum placeholder
            placeholderplaceholderplaceholderplaceh
          </p>
          <button className="border-white border w-[150px] py-3 rounded-md my-[5px] text-white text-lg max-md:text-[17px]">
            More Features
          </button>
        </div>
        <div className="flex gap-4   w-full flex-col justify-center items-center relative top-[100px]">
          <div className="flex gap-5 flex-wrap max-[1024px]:justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#8ff791f1] shadow-lg hover:shadow-2xl flex justify-center  flex-col p-[20px] rounded-lg"
            >
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-gray-300 rounded-full">
                <IoMdStar className="text-[30px]" />
              </div>
              <div className="my-4 font-bold">Presence</div>
              <div>
                Lorem ipsum placeholder <br /> rplaceholderplaceholder <br />
                placeholderplaceh
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#8ff791f1] shadow-lg hover:shadow-2xl flex justify-center  flex-col p-[20px] rounded-lg"
            >
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-gray-300 rounded-full">
                <IoMdStar className="text-[30px]" />
              </div>
              <div className="my-4 font-bold">Presence</div>
              <div>
                Lorem ipsum placeholder <br /> rplaceholderplaceholder <br />
                placeholderplaceh
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#8ff791f1] shadow-lg hover:shadow-2xl flex justify-center  flex-col p-[20px] rounded-lg"
            >
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-gray-300 rounded-full">
                <FaStarHalfStroke className="text-[30px]" />
              </div>
              <div className="my-4 font-bold">Presence</div>
              <div>
                Lorem ipsum placeholder <br /> rplaceholderplaceholder <br />
                placeholderplaceh
              </div>
            </motion.div>
          </div>
          <div className="flex gap-5 flex-wrap max-[1024px]:justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#8ff791f1] shadow-lg hover:shadow-2xl flex justify-center  sha  flex-col p-[20px] rounded-lg"
            >
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-gray-300 rounded-full">
                <FaStarHalfStroke className="text-[30px]" />
              </div>
              <div className="my-4 font-bold">Presence</div>
              <div>
                Lorem ipsum placeholder <br /> rplaceholderplaceholder <br />
                placeholderplaceh
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#8ff791f1] shadow-lg hover:shadow-2xl flex justify-center  sha  flex-col p-[20px] rounded-lg"
            >
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-gray-300 rounded-full">
                <FaStarHalfStroke className="text-[30px]" />
              </div>
              <div className="my-4 font-bold">Presence</div>
              <div>
                Lorem ipsum placeholder <br /> rplaceholderplaceholder <br />
                placeholderplaceh
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#8ff791f1] shadow-lg hover:shadow-2xl flex justify-center  sha  flex-col p-[20px] rounded-lg"
            >
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-gray-300 rounded-full">
                <IoMdStar className="text-[30px]" />
              </div>
              <div className="my-4 font-bold">Presence</div>
              <div>
                Lorem ipsum placeholder <br /> rplaceholderplaceholder <br />
                placeholderplaceh
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
