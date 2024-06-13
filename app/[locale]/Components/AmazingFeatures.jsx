"use client";
import { motion } from "framer-motion";
function AmazingFeatures() {
  return (
    <div className="flex justify-center items-center mb-[100px]">
      <div className="flex justify-center items-center mx-4  z-50 ">
        <div className="container  flex  justify-between gap-4 flex-wrap">
          <h1 className="font-bold text-[30px] max-md:text-[30px] w-full ">
            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Amazing {""}
            </span>
            Features
          </h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="my-[5px] text-gray-600 text-lg max-md:text-[17px] md:w-[45%] text-justify"
          >
            <span className="font-bold">Reconnaissance vocale avancée</span> :
            Notre application mobile intègre une reconnaissance vocale utilisant
            l&apos;intelligence artificielle, permettant de comprendre et
            exécuter des commandes complexes dans plusieurs langues. Vous pouvez
            dicter des messages, planifier des rendez-vous, ou rechercher des
            informations simplement en parlant à l&apos;application, rendant son
            utilisation rapide et accessible, notamment pour les personnes ayant
            des limitations physiques.
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
            className="my-[5px] text-gray-600 text-lg max-md:text-[17px] md:w-[45%] text-justify"
          >
            <span className="font-bold">Réalité augmentée interactive </span> :
            L&apos;application propose une réalité augmentée (RA) interactive,
            superposant des informations numériques sur le monde réel via
            l&apos;appareil photo de votre téléphone. Vous pouvez obtenir des
            indications de navigation en temps réel, explorer des objets 3D pour
            l&apos;apprentissage, ou jouer à des jeux immersifs. Par exemple, en
            pointant votre téléphone vers un monument, des faits historiques
            apparaissent à l&apos;écran, enrichissant votre expérience
            quotidienne.
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AmazingFeatures;
