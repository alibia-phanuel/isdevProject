"use client";
import { motion } from "framer-motion";
import Inscription from "../../../public/assets/user.png";
import navigation from "../../../public/assets/navigation.png";
import settings from "../../../public/assets/settings.png";
import sec from "../../../public/assets/sec.png";
import Image from "next/image";
function SectionOne() {
  return (
    <div id="how" className="flex justify-center items-center">
      <div className="container px-4">
        <div className="flex justify-center flex-col items-center  relative top-[100px]">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-bold my-[50px] text-[50px] max-sm:text-[30px] capitalize max-md:text-[50px] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent"
          >
            How Jon Easy works
          </motion.h1>

          <motion.p className="text-center max-md:text-justify  text-gray-600 text-[20px] max-md:text-[17px] mt-8">
            Download Jon Easy driver app from play store creat account use your
            and
            <br></br>
            driver by yourself get ride and earn more money
          </motion.p>
        </div>
        <div className="relative top-[120px] flex justify-between my-[250px] max-md:top-[-70px] ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className=" flex flex-col justify-between"
          >
            <div className="group  my-8 mx-5">
              <div className="flex  justify-end">
                <div className="icone  relative w-[70px] h-[70px] flex justify-center items-center  ">
                  <Image src={Inscription} alt="projetImg" fill></Image>
                </div>
              </div>
              <div className="flex  justify-end max-[600px]:w-[175px]">
                <h2 className="font-bold my-3 ">Inscription & Connexion</h2>
              </div>
              <p className="text-right ">
                Les utilisateurs peuvent s`inscrire en fournissant leur nom,
                adresse e-mail et mot de passe, avec vérification par e-mail.{" "}
                Les utilisateurs existants se connectent avec leurs identifiants
                pour accéder à l`application, assurant ainsi sécurité et
                personnalisation.
              </p>
            </div>
            <div className="  my-8 mx-5">
              <div className="flex  justify-end">
                <div className="icone  relative w-[70px] h-[70px] flex justify-center items-center  ">
                  <Image src={navigation} alt="projetImg" fill></Image>
                </div>
              </div>
              <div className="flex  justify-end">
                <h2 className="font-bold my-3">Navigation Intuitive</h2>
              </div>
              <p className="text-right">
                L`interface présente des boutons ou icônes pour les principales
                fonctionnalités, avec un menu latéral ou un onglet en bas pour
                naviguer facilement entre le tableau de bord, les notifications,
                les paramètres, et le profil, permettant une utilisation fluide
                et rapide.
              </p>
            </div>
          </motion.div>
          <div>
            <div className="bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90%  rounded-full w-[500px] h-[500px]  max-[1061px]:h-[300px] max-[1061px]:w-[300px] max-md:hidden flex  justify-center items-center mx-8 ">
              <div className="relative w-[300px] h-[600px] max-[1061px]:h-[550px] max-[1061px]:w-[250px] ">
                <Image
                  src="/sectwo.png"
                  alt="iphone x"
                  fill
                  className="animation"
                />
              </div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className=" flex flex-col justify-between"
          >
            <div className="group  my-8 mx-5">
              <div className="flex ">
                <div className="icone  relative w-[70px] h-[70px] flex justify-center items-center  ">
                  <Image src={settings} alt="projetImg" fill></Image>
                </div>
              </div>
              <div className="flex">
                <h2 className="font-bold my-3">
                  Fonctionnalités Personnalisées
                </h2>
              </div>
              <p className=" text-justify">
                L&lsquo;application recommande des contenus et services basés
                sur les interactions précédentes de l&lsquo;utilisateur. Les
                utilisateurs peuvent ajuster leurs paramètres pour notifications
                spécifiques, synchronisation de calendrier, et intégration
                d&lsquo;applications tierces, offrant une expérience
                personnalisée et enrichie.
              </p>
            </div>
            <div className="group  my-8 mx-5">
              <div className="flex">
                <div className="icone  relative w-[70px] h-[70px] flex justify-center items-center  ">
                  <Image src={sec} alt="projetImg" fill></Image>
                </div>
              </div>
              <div className="flex">
                <h2 className="font-bold my-3">Sécurité & Confidentialité</h2>
              </div>
              <p className=" text-justify">
                Les données des utilisateurs sont protégées par des protocoles
                de cryptage robustes et des mesures de prévention des accès non
                autorisés. Les utilisateurs contrôlent leurs informations
                personnelles et reçoivent des alertes en temps réel pour toute
                activité suspecte, garantissant la confidentialité et la
                sécurité.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
