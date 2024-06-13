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
    <div className="flex justify-center items-center w-full  relative  my-[100px]">
      <div className="container flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col my-[50px]">
          <h1 className="font-bold text-[50px] max-sm:text-[30px] capitalize max-md:text-[50px] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Our Partners
          </h1>
          <p className="my-[15px]  text-lg text-gray-600  max-w-2xl max-[500px]:text-sm text-center ">
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
            className="flex min-w-[300px] shadow-lg  justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <FaCcAmazonPay className="text-[40px]  text-blue-500" />
            </div>
            <div className="font-bold my-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              amazon pay
            </div>
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
            className="flex min-w-[300px] shadow-lg   justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <FaCcStripe className="text-[40px]  text-blue-500" />
            </div>
            <div className="font-bold my-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              pay{" "}
            </div>
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
            className="flex min-w-[300px] shadow-lg   justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <RiPaypalFill className="text-[40px]  text-blue-500" />
            </div>
            <div className="font-bold my-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Paypal
            </div>
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
            className="flex  min-w-[300px] shadow-lg   justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <IoLogoGooglePlaystore className="text-[40px]  text-blue-500" />
            </div>
            <div className="font-bold my-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              play store
            </div>
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
            className="flex min-w-[300px] shadow-lg   justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]rounded-full flex justify-center items-center text-[15px]">
              <IoLogoAppleAppstore className="text-[40px]  text-blue-500" />
            </div>
            <div className="font-bold my-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              App stores
            </div>
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
            className="flex min-w-[300px] shadow-lg    justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <TbTruckDelivery className="text-[40px]  text-blue-500" />
            </div>
            <div className="font-bold my-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Delivery Agenci
            </div>
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
            className="flex shadow-lg min-w-[300px]  hover:text-white transition-all  justify-center gap-4 items-center  capitalize bg-white p-[30px] rounded-lg"
          >
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center text-[15px]">
              <MdOutlinePayment className="text-[40px]  text-blue-500" />
            </div>
            <div className="font-bold my-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              mobile Payment
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
