"use client";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";
import projetc from "../../../public/assets/project.png";
import time from "../../../public/assets/time.png";
import analysis from "../../../public/assets/analysis.png";
import securit from "../../../public/assets/securit.png";
import circle from "../../../public/assets/circle.png";
const myFonts = localFont({
  src: "../../../Fonts/Google_Sans_Bold.ttf",
  display: "swap",
});

function Easysteps() {
  return (
    <>
      <h1 className="w-full  z-50  items-center mt-[100px] justify-center  text-center bg-red-900 max-[768px]:justify-center text-[50px] max-sm:text-[30px] capitalize max-md:text-[50px]   flex  bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
        <span className={myFonts.className}>
          Easy steps to use <br></br> the services
        </span>
      </h1>
      <div className="flex justify-center items-center mx-4 z-40  ">
        <div className="container  flex-wrap flex my-[100px] max-[768px]:justify-center  max-[1440px]:justify-center justify-between items-center gap-10  z-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" h-[550px]  w-[600px] relative max-[768px]:h-[400px] max-[768px]:w-[400px] animation"
          >
            <Image src={circle} alt="mobile" fill />
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
            <div className="max-md:flex max-md:flex-wrap text-justify">
              <div className="flex items-center  gap-x-4 max-md:flex-wrap my-4  max-sm:w-full">
                <div className="icone relative w-[70px] h-[70px] flex justify-center items-center ">
                  <Image src={projetc} alt="projetImg" fill></Image>
                </div>
                <div className="my-5 flex flex-col  justify-center">
                  <div className="font-bold text-2xl max-[500]:text-xl ">
                    Gestion de Projets
                  </div>
                  <div className="my-5 text-lg text-gray-600  max-w-2xl max-[500px]:text-sm">
                    Notre application permet une gestion de projets optimale
                    grâce à des outils intuitifs. Suivez les tâches, les délais
                    et les collaborateurs en un seul endroit. Planifiez et
                    organisez vos projets efficacement pour atteindre vos
                    objectifs plus rapidement.
                  </div>
                </div>
              </div>

              <div className="flex items-center  gap-x-4 max-md:flex-wrap my-4  max-sm:w-full">
                <div className="icone relative w-[70px] h-[70px] flex justify-center items-center">
                  <Image src={time} alt="projetImg" fill></Image>
                </div>
                <div className="my-5 flex flex-col  justify-center">
                  <div className="font-bold text-2xl max-[500]:text-xl">
                    Collaboration en Temps Réel
                  </div>
                  <div className="my-5 text-lg text-gray-600  max-w-2xl max-[500px]:text-sm">
                    Travaillez ensemble, peu importe où vous vous trouvez. Avec
                    notre service de collaboration en temps réel, partagez des
                    documents, discutez avec vos collègues et prenez des
                    décisions instantanément. Facilitez la communication et
                    améliorez la productivité de votre équipe.
                  </div>
                </div>
              </div>

              <div className="flex items-center  gap-x-4 max-md:flex-wrap my-4  max-sm:w-full">
                <div className="icone relative w-[70px] h-[70px] flex justify-center items-center">
                  <Image src={analysis} alt="projetImg" fill></Image>
                </div>
                <div className="my-5 flex flex-col  justify-center">
                  <div className="font-bold text-2xl max-[500]:text-xl">
                    Analyse de Données
                  </div>
                  <div className="my-5 text-lg text-gray-600  max-w-2xl max-[500px]:text-sm">
                    Transformez vos données en informations précieuses grâce à
                    nos outils d'analyse avancés. Visualisez les performances,
                    identifiez les tendances et prenez des décisions éclairées
                    pour piloter votre activité vers le succès.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-4 max-md:flex-wrap my-4  max-sm:w-full">
                <div className="icone relative w-[70px] h-[70px] flex justify-center items-center">
                  <Image src={securit} alt="projetImg" fill></Image>
                </div>
                <div className="my-5 flex flex-col  justify-center">
                  <div className="font-bold text-2xl max-[500]:text-xl">
                    Sécurité et Confidentialité
                  </div>
                  <div className="my-5 text-lg text-gray-600  max-w-2xl max-[500px]:text-sm">
                    Nous prenons la sécurité de vos données au sérieux. Profitez
                    d'un environnement sécurisé avec des protocoles de cryptage
                    de pointe et des sauvegardes régulières pour assurer la
                    confidentialité et l'intégrité de vos informations
                    sensibles.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Easysteps;
