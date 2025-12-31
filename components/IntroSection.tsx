"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import profileImg from "../assets/profileImg.jpeg";
import { localeProfileData, commonProfileData } from "@/data/profile";
import { Phone, Mail } from "lucide-react";
import Ripple from "@/components/Ripple";

export function IntroSection() {
  const t = useTranslations();
  const locale = useLocale() as "ko" | "en";
  const isEmployed =
    localeProfileData[locale].status !== "구직 중" &&
    localeProfileData[locale].status !== "Open to Work";

  return (
    <>
      <div>
        <h1 className="text-2xl font-medium">{t("headline")}</h1>
      </div>
      <div className="border rounded-lg">
        <div className="flex p-8 justify-between">
          <div className="flex gap-5">
            <div className="inline-flex justify-center items-center rounded-full shadow-md p-1 bg-white">
              <Image
                src={profileImg}
                alt="Profile"
                className="rounded-full w-32 h-32"
              />
            </div>
            <div>
              <h3>{localeProfileData[locale].name}</h3>
              <h4>{localeProfileData[locale].major}</h4>
              <div className="flex gap-2">
                <span className="flex">
                  <Phone />
                  <p>{commonProfileData.phone}</p>
                </span>
                <p>|</p>
                <span className="flex">
                  <Mail />
                  <p>{commonProfileData.email}</p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <Ripple isEmployed={isEmployed} />
            {localeProfileData[locale].status}
          </div>
        </div>
      </div>
    </>
  );
}
