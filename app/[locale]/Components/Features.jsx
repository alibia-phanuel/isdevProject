"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import offlineMode from "../../../public/assets/offlineMode.png";
import chat from "../../../public/assets/chat.png";
import casque from "../../../public/assets/casque.png";
import loop from "../../../public/assets/loop.png";
import interconnected from "../../../public/assets/interconnected.png";
import qa from "../../../public/assets/qa.png";

function Features() {
  return (
    <div className="bg-white  shadow-lg w-full flex justify-center items-center  relative px-4 mb-[100px]">
      <div className="flex z-50 container justify-between items-center flex-wrap">
        <div className=" flex flex-col w-full justify-center items-center  max-sm:text-center">
          <h1 className="w-full font-bold   items-center mt-[100px] justify-center  text-center bg-red-900 max-[768px]:justify-center text-[50px] max-sm:text-[30px] capitalize max-md:text-[50px]   flex  bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Fonctionnalitées
          </h1>
          <p className="my-[25px] text-gray-600 text-lg max-md:text-[17px] text-center">
            Découvrez une gamme complète de fonctionnalités conçues pour
            améliorer votre expérience utilisateur.
            <br />
            Notre application offre des outils puissants et intuitifs pour
            répondre à tous vos besoins, que ce soit <br />
            pour une sécurité renforcée, une communication instantanée, ou un
            accès facile à l&lsquo;information. <br />
            Explorez ci-dessous toutes les fonctionnalités qui rendent notre
            application unique et indispensable.
          </p>
        </div>
        <div className="flex gap-4   w-full flex-col justify-center items-center relative top-[100px]">
          <div className="flex gap-5 flex-wrap max-[1024px]:justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#EA5F0B] shadow-lg hover:shadow-2xl flex justify-center  flex-col p-[20px] rounded-lg w-[350px] max-md:w-full"
            >
              <div className="icone relative w-[65px] h-[65px] flex justify-center items-center ">
                <Image src={offlineMode} alt="projetImg" fill></Image>
              </div>
              <div className="my-4 font-bold">Mode Hors-Ligne</div>
              <div>
                Permet aux utilisateurs d&lsquo;accéder à certaines
                fonctionnalités de l&lsquo;application même sans connexion
                Internet, en sauvegardant les données localement.
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#EA5F0B] shadow-lg hover:shadow-2xl flex justify-center  flex-col p-[20px] rounded-lg w-[350px] max-md:w-full"
            >
              <div className="icone relative w-[65px] h-[65px] flex justify-center items-center">
                <Image src={casque} alt="projetImg" fill></Image>
              </div>
              <div className="my-4 font-bold">Support et Assistance</div>
              <div>
                Offre une aide instantanée avec une section FAQ, un chat en
                direct avec le support client, et des tutoriels.
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#EA5F0B] shadow-lg hover:shadow-2xl flex justify-center  flex-col p-[20px] rounded-lg w-[350px] max-md:w-full"
            >
              <div className="icone relative w-[65px] h-[65px] flex justify-center items-center ">
                <Image src={chat} alt="projetImg" fill></Image>
              </div>
              <div className="my-4 font-bold">Messagerie Instantanée</div>
              <div>
                Offre une fonctionnalité de chat en temps réel pour permettre
                aux utilisateurs de communiquer instantanément entre eux.
              </div>
            </motion.div>
          </div>
          <div className="flex gap-5 flex-wrap max-[1024px]:justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#EA5F0B] shadow-lg hover:shadow-2xl flex justify-center  sha  flex-col p-[20px] rounded-lg w-[350px] max-md:w-full"
            >
              <div className="icone relative w-[65px] h-[65px] flex justify-center items-center ">
                <Image src={loop} alt="projetImg" fill></Image>
              </div>
              <div className="my-4 font-bold">Recherche Avancée</div>
              <div>
                Fournit des options de recherche avancées permettant aux
                utilisateurs de trouver rapidement et facilement des
                informations spécifiques.
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#EA5F0B] shadow-lg hover:shadow-2xl flex justify-center  sha  flex-col p-[20px] rounded-lg w-[350px] max-md:w-full"
            >
              <div className="icone relative w-[65px] h-[65px] flex justify-center items-center ">
                <Image src={interconnected} alt="projetImg" fill></Image>
              </div>
              <div className="my-4 font-bold">
                Intégration avec des Services Externes
              </div>
              <div>
                Permet de connecter et d&lsquo;intégrer l&lsquo;application avec
                d&lsquo;autres services et plateformes populaires comme Google
                Drive, Orange money, et moby Money, facilitant le partage et la
                gestion de vos données.
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white border-2 border-[#EA5F0B] shadow-lg hover:shadow-2xl flex justify-center  sha  flex-col p-[20px] rounded-lg w-[350px] max-md:w-full"
            >
              <div className="icone relative w-[65px] h-[65px] flex justify-center items-center ">
                <Image src={qa} alt="projetImg" fill></Image>
              </div>
              <div className="my-4 font-bold">Personnalisation du Profil</div>
              <div>
                Permet aux utilisateurs de personnaliser leur profil avec des
                informations personnelles, une photo de profil, et des
                préférences.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
