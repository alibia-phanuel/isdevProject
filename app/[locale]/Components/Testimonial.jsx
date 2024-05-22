"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
function Testimonial() {
  const Testimonial_data = [
    {
      img: "/pp2.jpg",
      content_text:
        " marco It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
      name: "marco",
      text_block: "Projet manager microsoft",
    },
    {
      img: "/pp1.jpg",
      content_text:
        " arsene It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
      name: "arsene",
      text_block: "Projet manager microsoft",
    },
    {
      img: "/pp3.jpg",
      content_text:
        " yolo It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
      name: "yolo",
      text_block: "Projet manager microsoft",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = Testimonial_data.length;
  const Previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const Next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <div className="relative  top-[150px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex  max-md:px-0 rounded-lg shadow-lg hover:shadow-2xl transition-all flex-col justify-between items-center w-full py-[100px] relative top-[200px] bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90% bg-transparent mt-[100px]"
      >
        <h1 className="font-bold text-[30px] max-md:text-[18px] text-white relative bottom-8">
          Testimonial
        </h1>
        <div className="container  px-4">
          {Testimonial_data.map(
            (item, index) =>
              index === current && (
                <div key={item.name}>
                  <div className="pb-[20px] flex"></div>
                  <div className="my-[5px] text-white text-lg max-md:text-[17px] mb-10">
                    <h2>{item.content_text}</h2>
                  </div>
                  <div className="flex gap-4 items-center  justify-between">
                    <div className="flex gap-4 items-center ">
                      <div className="w-[100px] h-[100px] bg-slate-300 rounded-full  relative">
                        <Image
                          src={item.img}
                          fill
                          alt="photo de profile"
                          className="rounded-full"
                        />
                      </div>
                      <div className="text-white capitalize">
                        <h6>{item.name}</h6>
                        <span>{item.text_block}</span>
                      </div>
                    </div>
                    <div>
                      <div
                        onClick={Next}
                        className="w-[40px] h-[40px] relative rotate-180 bg-white rounded-full my-2 shadow-lg cursor-pointer"
                      >
                        <Image
                          src="/previous.png"
                          fill
                          alt="previous button"
                          className="rounded-full"
                        />
                      </div>
                      <div
                        onClick={Previous}
                        className="w-[40px] h-[40px] relative bg-white rounded-full my-2 shadow-lg cursor-pointer"
                      >
                        <Image
                          src="/previous.png"
                          fill
                          alt="previous button"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Testimonial;
