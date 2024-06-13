"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Image from "next/image";
export default function ChangeLangButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="my-5 lg:text-[15px] text-white max-w-2xl z-30 bg-red-900 rounded-lg max-[344px]:w-[200px]">
      <select
        defaultValue={localActive}
        className="py-1 bg-[#779866] max-[344px]:w-full"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en" className="text-white flex justify-between gap-4 ">
          <span> English</span>
        </option>
        <option value="fr" className="text-white flex justify-between gap-4 ">
          <span className="bg-red-900"> French</span>
        </option>
      </select>
    </label>
  );
}
