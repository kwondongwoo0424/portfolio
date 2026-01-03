"use client";

import { useLocale, useTranslations } from "next-intl";
import { localeProfileData } from "@/data/profile";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileDetails } from "./ProfileDetails";

export function IntroSection() {
  const t = useTranslations();
  const locale = useLocale() as "ko" | "en";
  const profileData = localeProfileData[locale];

  return (
    <div className="flex flex-col gap-3">
      <div className="border rounded-lg">
        <div className="flex flex-col gap-6 px-8 py-8 max-[600px]:px-4 max-[600px]:py-2">
          <ProfileHeader
            name={profileData.name}
            major={profileData.major}
            status={profileData.status}
          />
          <ProfileDetails
            birth={profileData.birth}
            residence={profileData.residence}
            education={profileData.education}
            military={profileData.military}
            portfolio={profileData.portfolio}
          />
        </div>
      </div>
      <div className="max-[600px]:px-4">
        <h1 className="text-lg font-medium">{t("headline")}</h1>
        <p>{profileData.introduction.paragraph1}</p>
        <p>{profileData.introduction.paragraph2}</p>
      </div>
    </div>
  );
}
