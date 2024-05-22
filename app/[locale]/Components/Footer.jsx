"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Navigation");
  return (
    <footer className="flex px-4 py-8 justify-center items-center bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90% ">
      <div className="container flex flex-wrap gap-4 justify-between items-center ">
        <div className="logo">
          <Image
            src="/logo.png"
            alt=""
            width={50}
            height={50}
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
          className="flex flex-col text-white gap-4  capitalize"
        >
          <Link href="#accueil"> {t("home")}</Link>

          <Link href="#JonEasyPro">{t("link2")}</Link>

          <Link href="#JonEasyFree"> {t("link3")}</Link>

          <Link href="#WhyJonEasy"> {t("link4")}</Link>

          <Link href="#how">{t("link5")}</Link>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
