"use client";
import Link from "next/link";
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
    <header className="flex justify-center items-center w-full flex-wrap px-4  bg-gradient-to-r from-[#8ff791f1] from-10% via-[#5edc60f1] via-30% to-[#5edc60f1] to-90%  ">
      <div className="container flex justify-between items-center py-4 gap-4">
        <div class="">
          <Image
            src="/logo.png"
            alt=""
            width={50}
            height={50}
            className="Home-img-images-brands"
          />
        </div>
        <div className="capitalize relative  max-[768px]:w-full max-[768px]:flex max-[768px]:justify-end rounded">
          <div
            className={`${showMenuResponsive} overflow-hidden max-[768px]:w-full max-[768px]:bg-[#769765] z-30 max-[768px]:absolute max-[768px]:top-[0px] rounded  max-[768px]:flex-col flex gap-8 text-white items-center font-[300]`}
          >
            <Link
              onClick={() => setBlock(!isblock)}
              href="#accueil"
              className="font-bold"
            >
              {t("home")}
            </Link>

            <Link
              onClick={() => setBlock(!isblock)}
              href="#JonEasyPro"
              className="font-bold"
            >
              {t("link2")}
            </Link>

            <Link
              onClick={() => setBlock(!isblock)}
              href="#JonEasyFree"
              className="font-bold"
            >
              {t("link3")}
            </Link>

            <Link
              onClick={() => setBlock(!isblock)}
              href="#WhyJonEasy"
              className="font-bold"
            >
              {t("link4")}
            </Link>

            <Link
              onClick={() => setBlock(!isblock)}
              href="#Contact"
              className="font-bold"
            >
              {t("link5")}
            </Link>
          </div>
          <div
            onClick={() => setBlock(!isblock)}
            className="min-[770px]:hidden w-[40px]  z-50 flex flex-col h-[40px] m-2 items-center justify-center rounded  text-white p-1 bg-[#7faa69] cursor-pointer"
          >
            <div className="h-1 w-[30px] my-[2px] bg-white"></div>
            <div className="h-1 w-[30px] my-[2px] bg-white"></div>
            <div className="h-1 w-[30px] my-[2px] bg-white"></div>
          </div>
        </div>
        <ChangeLangButton />
      </div>
    </header>
  );
}
