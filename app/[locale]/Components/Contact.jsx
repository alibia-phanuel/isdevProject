"use client";
import { motion } from "framer-motion";
function Contact() {
  const inputStyles = `my-5 w-full outline-none rounded-lg bg-[#F8F8F8]
  px-5 py-3 `;

  return (
    <div
      id="Contact"
      className="w-full  shadow-lg  px-4  flex items-center justify-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="mx-4 container  rounded-lg shadow-lg hover:shadow-2xl transition-all my-[100px]  py-[50px] flex flex-col w-full justify-center items-center bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90%"
      >
        <div className="mt-10 basis-3/5 md:mt-0 ">
          <form
            target="_blank"
            action="https://formsubmit.co/phanuel.alibia@gmail.com"
            method="POST"
            className=" w-[700px] max-[782px]:w-[600px] max-md:w-[400px] max-[418px]:w-[300px] max-[280px]:w-[200px] px-4"
          >
            <motion.input
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className={inputStyles}
              type="text"
              placeholder="Nom & Prénom"
            />

            <motion.input
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className={inputStyles}
              type="text"
              placeholder="Email"
            />

            <motion.textarea
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className={inputStyles}
              placeholder="Message.."
              rows={4}
              cols={50}
            />

            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              type="submit"
              className="mt-5 font-bold bg-[#75f867] w-[50%] text-center  rounded-lg   py-3  text-[#ffffff]"
            >
              Envoyer
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
