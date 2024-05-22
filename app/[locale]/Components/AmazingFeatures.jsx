"use client";
import { motion } from "framer-motion";
function AmazingFeatures() {
  return (
    <div className=" flex justify-center items-center mx-4 mb-[200px]">
      <div className="container  flex   justify-between gap-4 max-md:flex-wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="font-bold text-[30px] max-md:text-[18px]">
            <span className="text-[#6af583]">Amazing</span> Features
          </h1>
          <p className="my-[5px] text-gray-600 text-lg max-md:text-[17px]">
            There are many variations of passages of Lorem Ipsum available, but{" "}
            <br />
            the majority have suffered alteration in some form, by injected{" "}
            <br />
            humour, or randomised words which don`t look even slightly
          </p>
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
          className="my-[5px] text-gray-600 text-lg max-md:text-[17px]"
        >
          There are many variations of passages of Lorem Ipsum available, but{" "}
          <br />
          the majority have suffered alteration in some form, by injected
          <br />
          humour, or randomised words which don`t look even slightly believable.
          <br />
          If you are going to use a passage of Lorem Ipsum, you
        </motion.div>
      </div>
    </div>
  );
}

export default AmazingFeatures;
