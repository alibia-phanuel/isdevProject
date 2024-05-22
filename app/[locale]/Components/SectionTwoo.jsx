"use client";
import { motion } from "framer-motion";
function SectionTwoo() {
  return (
    <div className="flex justify-center items-center my-6 mx-4 relative max-md:bottom-[100px]">
      <div className="container flex justify-center items-center flex-col">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" text-[50px] max-md:text-[40px] my-10 font-[1000] capitalize"
        >
          How does this app work
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="my-[5px] text-gray-600 text-lg max-md:text-[17px]"
        >
          lorem ipsum placeholder lorem ipsum placeholderlorem ipsum placeholder
          lorem ipsum placeholder lorem ipsum placeholder lorem ipsum
          placeholder <br />
          lorem ipsum placeholder lorem ipsum placeholder lorem ipsum
          placeholder lorem ipsum placeholder lorem ipsum placeholder
        </motion.p>
        <div className="container flex md:justify-center items-center gap-10 text-[17px] max-md:text-[15px] my-4">
          <button className="bg-gray-200 p-4 text-lg  rounded-lg font-bold ">
            Parameter
          </button>
          <button className="bg-green-600 p-4 text-lg  rounded-lg text-white capitalize">
            other
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionTwoo;
