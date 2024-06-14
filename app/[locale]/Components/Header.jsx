"use client";
import Link from "next/link";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useTranslations } from "next-intl";
import ChangeLangButton from "./ChangeLangButton";
import { useState } from "react";
import Image from "next/image";
export default function Header() {
  const t = useTranslations("Navigation");
  const [isblock, setBlock] = useState(true);
  const showMenuResponsive = isblock
    ? "max-md:h-[0] max-md:py-0  max-md:transition-all"
    : "max-md:h-[500] max-md:py-4   max-md:transition-all";
  return (
    <header className="flex justify-center items-center w-full flex-wrap px-4 shadow-xl z-50  bg-white ">
      <div className="container flex justify-between items-center py-4 gap-4 ">
        <Image
          src="/logoHome.png"
          alt="logo"
          width={175}
          height={45}
          className="z-40"
        />
        <div
          onClick={() => setBlock(!isblock)}
          className="capitalize max-md:w-full max-md:flex max-md:justify-end rounded "
        >
          <div
            className={`${showMenuResponsive}  text-gray-600 lg:text-[15px]  max-md:bg-red-500  overflow-hidden  max-md:text-white max-md:left-[0px] max-md:bg-gradient-to-r from-green-400 to-green-500 z-[1000] max-md:absolute max-md:top-[83px] rounded  max-md:flex-col max-md:w-full flex gap-8 items-center `}
          >
            <Link
              onClick={() => setBlock(!isblock)}
              href="#accueil"
              className="my-5 "
            >
              {t("home")}
            </Link>
            <Link
              onClick={() => setBlock(!isblock)}
              href="#JonEasyPro"
              className="my-5  "
            >
              {t("link2")}
            </Link>
            <Link
              onClick={() => setBlock(!isblock)}
              href="#JonEasyFree"
              className="my-5  "
            >
              {t("link3")}
            </Link>
            <Link
              onClick={() => setBlock(!isblock)}
              href="#WhyJonEasy"
              className="my-5  "
            >
              {t("link4")}
            </Link>
          </div>
          <div
            onClick={() => setBlock(!isblock)}
            className=" md:hidden   z-50 flex flex-col text-[40px]  rounded-lg m-2 items-center justify-center text-[#505050] p-1  cursor-pointer"
          >
            <MdOutlineMenuOpen />
          </div>
        </div>
        <ChangeLangButton />
      </div>
    </header>
  );
}
