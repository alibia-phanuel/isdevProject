"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Navigation");
  return (
    <footer className="flex z-20 h-[500px] px-4 py-8 justify-center items-center bg-white ">
      <div className="container flex flex-wrap gap-4 justify-between items-center ">
        <div className="logo">
          <Image
            src="/logoHome.png"
            alt="logo"
            width={175}
            height={45}
            className="Home-img-images-brands"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col text-[#403E3A] gap-4  capitalize"
        >
          <h1 className="text-[#283387] font-bold">Menu</h1>
          <div className="flex flex-col ">
            <Link href="#accueil"> {t("home")}</Link>

            <Link href="#JonEasyPro">{t("link2")}</Link>

            <Link href="#JonEasyFree"> {t("link3")}</Link>

            <Link href="#WhyJonEasy"> {t("link4")}</Link>
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
          className="flex flex-col text-[#403E3A] gap-4  capitalize"
        >
          <h1 className="text-[#283387] font-bold">Contact Us</h1>
          <div className="flex flex-col ">
            <Link href="tel:658310649"> CLIQUEZ POUR APPELER</Link>
            <Link href="mailto:isdev@gmail.com" className="uppercase">
              isdev@gmail.com
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
