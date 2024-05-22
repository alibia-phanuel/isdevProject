"use client";
import { motion } from "framer-motion";
import { GrValidate } from "react-icons/gr";
function WhyJonEasy() {
  return (
    <div
      id="WhyJonEasy"
      className="  flex  flex-col  items-center justify-center relative  px-4"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-[50px] max-md:text-[40px] my-10 font-[1000] capitalize"
      >
        Why Jon Easy ?
      </motion.h2>
      <div className="flex w-full justify-center items-center mx-4">
        <div className="container flex items-center max-[768px]:flex-wrap  justify-center gap-4 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative w-[50%] max-[768px]:w-[100%]"
          >
            {/* Div avec fond transparent */}
            <div className="absolute top-0 left-0 w-[100%] h-full bg-[#0000002d]"></div>

            {/* Balise vidéo */}
            <video controls autoPlay muted loop className="">
              <source src="videoComplet01.mp4" type="video/mp4" />
            </video>
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
            <h1 className="text-[30px] font-bold shadow p-4 hover:shadow-2xl transition-all">
              Take <span className="text-[#6af583]">Control of Everything</span>{" "}
              <br />
              in You Hands.
            </h1>
            <p className="my-[30px] text-gray-600 text-lg max-md:text-[17px]">
              There are many variations of passages of Lorem Ipsum available,
              but
              <br />
              the majority have suffered alteration in some form, by injected
              <br />
              humour, or randomised words which
            </p>
            <div className="flex gap-4 my-[20px]">
              <div className="h-[80px] w-[80px] bg-slate-200 flex justify-center items-center rounded-lg border-[#6af583] text-[#6af583] border-l-4">
                <GrValidate className="text-[40px]" />
              </div>
              <div>
                <h1 className="font-bold capitalize text-[20px]"></h1>
                <p className="text-gray-600 text-lg max-md:text-[17px]">
                  {" "}
                  ontrary to popular belief, Lorem Ipsum is not simply random{" "}
                  <br></br>
                  text. It has roots in a piece of classical
                </p>
              </div>
            </div>

            <div className="flex gap-4 my-[20px]">
              <div className="h-[80px] w-[80px] bg-slate-200 flex justify-center items-center rounded-lg border-[#6af583] text-[#6af583] border-l-4">
                <GrValidate className="text-[40px]" />
              </div>
              <div>
                <h1 className="font-bold capitalize text-[20px]"></h1>
                <p className="text-gray-600 text-lg max-md:text-[17px]">
                  {" "}
                  ontrary to popular belief, Lorem Ipsum is not simply random{" "}
                  <br></br>
                  text. It has roots in a piece of classical
                </p>
              </div>
            </div>

            <div className="flex gap-4 my-[20px]">
              <div className="h-[80px] w-[80px] bg-slate-200 flex justify-center items-center rounded-lg border-[#6af583] text-[#6af583] border-l-4">
                <GrValidate className="text-[40px]" />
              </div>
              <div>
                <h1 className="font-bold capitalize text-[20px]"></h1>
                <p className="text-gray-600 text-lg max-md:text-[17px]">
                  {" "}
                  ontrary to popular belief, Lorem Ipsum is not simply random{" "}
                  <br></br>
                  text. It has roots in a piece of classical
                </p>
              </div>
            </div>

            <div className="flex gap-4 my-[20px]">
              <div className="h-[80px] w-[80px] bg-slate-200 flex justify-center items-center rounded-lg border-[#6af583] text-[#6af583] border-l-4">
                <GrValidate className="text-[40px]" />
              </div>
              <div>
                <h1 className="font-bold capitalize text-[20px]"></h1>
                <p className="text-gray-600 text-lg max-md:text-[17px]">
                  {" "}
                  ontrary to popular belief, Lorem Ipsum is not simply random{" "}
                  <br></br>
                  text. It has roots in a piece of classical
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhyJonEasy;
