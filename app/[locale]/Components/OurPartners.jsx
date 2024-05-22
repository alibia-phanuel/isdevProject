"use client";
import { motion } from "framer-motion";
import { FaCcStripe } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa6";
import { RiPaypalFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
function OurPartners() {
  return (
    <div className="flex justify-center items-center w-full  relative top-[200px] max-md:top-[350px] my-[300px]">
      <div className="container flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-[30px] max-md:text-[18px] ">
            Our Partners
          </h1>
          <p className="my-[15px] max-sm:text-center text-lg max-md:text-[17px]">
            Lorem ipsum placeholder delivre Lorem ipsum placeholder delivre
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex min-w-[300px] shadow-lg hover:hover:bg-[#5edc60f1] hover:text-white transition-all  justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <FaCcAmazonPay className=" text-[40px]" />
            </div>
            <div className="font-bold my-3">amazon pay</div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex min-w-[300px] shadow-lg hover:bg-[#5edc60f1] hover:text-white transition-all  justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <FaCcStripe className=" text-[40px]" />
            </div>
            <div className="font-bold my-3">pay </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex min-w-[300px] shadow-lg hover:bg-[#5edc60f1]  hover:text-white transition-all  justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <RiPaypalFill className=" text-[40px]" />
            </div>
            <div className="font-bold my-3">Paypal</div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex min-w-[300px] shadow-lg hover:bg-[#5edc60f1]  hover:text-white transition-all  justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <IoLogoGooglePlaystore className=" text-[40px]" />
            </div>
            <div className="font-bold my-3">play store</div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex min-w-[300px] shadow-lg hover:bg-[#5edc60f1]  hover:to-90% hover:text-white transition-all  justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]rounded-full flex justify-center items-center text-[15px]">
              <IoLogoAppleAppstore className=" text-[40px]" />
            </div>
            <div className="font-bold my-3">App stores</div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex min-w-[300px] shadow-lg hover:bg-[#5edc60f1] hover:text-white transition-all   justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <TbTruckDelivery className=" text-[40px]" />
            </div>
            <div className="font-bold my-3">Delivery Agenci</div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex shadow-lg min-w-[300px] hover:bg-gradient hover:bg-[#5edc60f1]  hover:text-white transition-all  justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <MdOutlinePayment className=" text-[40px]" />
            </div>
            <div className="font-bold my-3">mobile Payment</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
