"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function SectionFive() {
  return (
    <div className=" flex justify-center items-center ">
      <div className="container   z-50 justify-between items-center  my-[100px] flex-wrap px-10 overflow-hidden text-white rounded-lg  flex shadow-lg bg-[#28338765]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="py-10  w-[600px] max-[768px]:w-full"
        >
          <h1 className=" font-bold text-[30px] max-md:text-[18px] text-white relative">
            Téléchargez{" "}
            <span className="font-bold text-[#1F6DDF]">JON EASY</span>
          </h1>
          <motion.p className="my-5 text-white text-lg max-md:text-[17px] text-justify">
            Téléchargez notre application pour bénéficier d`une expérience
            personnalisée et sécurisée qui révolutionnera votre quotidien. Grâce
            à une interface intuitive, vous naviguerez facilement entre les
            différentes fonctionnalités, spécialement conçues pour répondre à
            vos besoins. Que vous souhaitiez recevoir des recommandations sur
            mesure, synchroniser votre calendrier ou intégrer d&lsquo;autres
            applications, tout est pensé pour vous simplifier la vie. De plus,
            avec nos protocoles de sécurité avancés, vos données personnelles
            sont protégées à chaque instant. Rejoignez notre communauté et
            découvrez comment notre application peut transformer votre manière
            de gérer vos tâches et vos loisirs. Téléchargez dès maintenant pour
            une expérience inégalée !
          </motion.p>
          <button className="bg-[#292828] p-3 rounded-lg text-white text-lg max-md:text-[17px]">
            Téléchargez maintenant
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
