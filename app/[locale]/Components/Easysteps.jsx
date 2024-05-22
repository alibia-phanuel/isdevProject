"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaRankingStar } from "react-icons/fa6";
function Easysteps() {
  return (
    <div className="flex justify-center items-center my-[100px] px-4">
      <div className="container flex justify-between items-center flex-wrap max-[768px]:justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[300px] h-[600px]  relative"
        >
          <Image src="/iphone.png" alt="iphone x" fill />
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
          <h1 className="text-[50px] max-md:text-[40px] my-10 font-[1000] capitalize">
            Easy steps to use <br></br> the services
          </h1>
          <div className="max-md:flex max-md:flex-wrap">
            <div className="flex items-center gap-x-4 max-md:flex-wrap my-4 ">
              <div className="icone w-[50px] h-[50px] bg-gray-300 rounded-full border border-green-500 flex justify-center items-center">
                <FaRankingStar className="text-[30px]" />
              </div>
              <div className="my-5 flex flex-col  justify-center">
                <div className="font-bold text-[20px] max-md:text-[18px]">
                  Download and Register
                </div>
                <div className="my-[5px] text-gray-600 text-lg max-md:text-[17px] ">
                  Lorem ipsum placeholder delivre placeholder delivreplaceholder{" "}
                  <br />
                  delivre placeholder delivre placeholder delivre placeholder{" "}
                  <br />
                  delivreplaceholder delivreplaceholder delivre
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-4 max-md:flex-wrap my-4">
              <div className="icone flex justify-center items-center w-[50px] h-[50px] bg-gray-300 rounded-full border border-green-500">
                <FaRankingStar className="text-[30px]" />
              </div>
              <div className="my-5 flex flex-col  justify-center">
                <div className="font-bold text-[20px] max-md:text-[18px]">
                  Download and Register
                </div>
                <div className="my-[5px] text-gray-600 text-lg max-md:text-[17px] ">
                  Lorem ipsum placeholder delivre placeholder delivreplaceholder{" "}
                  <br />
                  delivre placeholder delivre placeholder delivre placeholder{" "}
                  <br />
                  delivreplaceholder delivreplaceholder delivre
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-4 max-md:flex-wrap my-4">
              <div className="icone flex justify-center items-center w-[50px] h-[50px] bg-gray-300 rounded-full border border-green-500">
                <FaRankingStar className="text-[30px]" />
              </div>
              <div className="my-5 flex flex-col  justify-center">
                <div className="font-bold text-[20px] max-md:text-[18px]">
                  Download and Register
                </div>
                <div className="my-[5px] text-gray-600 text-lg max-md:text-[17px] ">
                  Lorem ipsum placeholder delivre placeholder delivreplaceholder{" "}
                  <br />
                  delivre placeholder delivre placeholder delivre placeholder{" "}
                  <br />
                  delivreplaceholder delivreplaceholder delivre
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-4 max-md:flex-wrap my-4  ">
              <div className="icone flex justify-center items-center w-[50px] h-[50px] bg-gray-300 rounded-full border border-green-500">
                <FaRankingStar className="text-[30px]" />
              </div>
              <div className="my-5 flex flex-col  justify-center">
                <div className="font-bold text-[20px] max-md:text-[18px]">
                  Download and Register
                </div>
                <div className="my-[5px] text-gray-600 text-lg max-md:text-[17px] ">
                  Lorem ipsum placeholder delivre placeholder delivreplaceholder{" "}
                  <br />
                  delivre placeholder delivre placeholder delivre placeholder{" "}
                  <br />
                  delivreplaceholder delivreplaceholder delivre
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Easysteps;
