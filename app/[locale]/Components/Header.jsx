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
    ? "max-[768px]:h-[0] max-[768px]:py-0  max-[768px]:transition-all"
    : "max-[768px]:h-[500] max-[768px]:py-4   max-[768px]:transition-all";
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
          className="capitalize max-[768px]:w-full max-[768px]:flex max-[768px]:justify-end rounded "
        >
          <div
            className={`${showMenuResponsive}  text-gray-600 lg:text-[15px]  overflow-hidden  max-[768px]:text-white max-[768px]:left-[0px] max-[768px]:bg-gradient-to-r from-green-400 to-green-500 z-[1000] max-[768px]:absolute max-[768px]:top-[83px] rounded  max-[768px]:flex-col max-[768px]:w-full flex gap-8 items-center `}
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
