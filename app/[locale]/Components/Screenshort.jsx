"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Screenshort = () => {
  return (
    <div className="flex justify-center items-center mb-[100px]">
      <div className="flex justify-center items-center mx-4 flex-col z-20">
        <div className="font-bold text-[50px] max-sm:text-[30px] capitalize max-md:text-[50px] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent my-[50px]">
          Awesome Sreenshorts
        </div>
        <p className="text-center ">
          is a long established fact that a reader will be distracte by the
          readable content <br />
          of a page when looking at its layout. The point
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex mt-10"
        >
          <Image
            src="/screenshort.png"
            alt="screenshort"
            width={1000}
            height={200}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Screenshort;
