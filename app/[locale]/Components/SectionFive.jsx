"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function SectionFive() {
  return (
    <div className=" flex justify-center items-center z-50">
      <div className="container  justify-between items-center  my-[100px] flex-wrap px-10 overflow-hidden text-white rounded-lg  flex bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90%">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="py-10  w-[600px] max-[768px]:w-full text-center"
        >
          <h1 className=" font-bold text-[30px] max-md:text-[18px] text-white relative">
            Download Roader App
          </h1>
          <motion.p className="my-5 text-white text-lg max-md:text-[17px]">
            lorem ipsum placeholder lorem ipsum placeholderlorem ipsum <br />
            placeholder lorem ipsum placeholder lorem ipsum placeholder lorem
            <br />
            ipsum placeholder lorem ipsum placeholder lorem ipsum placeholder
            <br />
            lorem ipsum placeholder lorem ipsum placeholder lorem ipsum
            placeholder
          </motion.p>
          <button className="bg-[#292828] p-3 rounded-lg text-white text-lg max-md:text-[17px]">
            Get tryall
          </button>
        </motion.div>
        <div className="container w-[300px] flex max-[768px]:items-center max-[768px]:justify-center gap-4 max-[768px]:w-full">
          <div className="top-[100px] relative">
            <Image src="/iphone.png" alt="iphone x" width={200} height={200} />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bottom-[150px] max-[768px]:bottom-[0px] relative"
          >
            <Image src="/sectwo.png" alt="iphone x" width={200} height={200} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
