"use client";

import { useLocale, useTranslations } from "next-intl";
import { localeProfileData } from "@/data/profile";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileStatus } from "./ProfileStatus";
import { ProfileDetails } from "./ProfileDetails";

export function IntroSection() {
  const t = useTranslations();
  const locale = useLocale() as "ko" | "en";
  const profileData = localeProfileData[locale];

  const isEmployed =
    profileData.status !== "구직 중" && profileData.status !== "Open to Work";

  return (
    <div className="flex flex-col gap-3">
      <div className="border rounded-lg">
        <div className="flex p-8 flex-col gap-6">
          <div className="flex justify-between">
            <ProfileHeader name={profileData.name} major={profileData.major} />
            <div>
              <ProfileStatus
                status={profileData.status}
                isEmployed={isEmployed}
              />
            </div>
          </div>

          <ProfileDetails
            birth={profileData.birth}
            residence={profileData.residence}
            education={profileData.education}
            military={profileData.military}
            resume={profileData.resume}
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">{t("headline")}</h1>
      </div>
    </div>
  );
}
