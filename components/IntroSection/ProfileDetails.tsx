import { useLocale, useTranslations } from "next-intl";
import { commonProfileData } from "@/data/profile";
import Image from "next/image";
import { FileUser } from "lucide-react";
import linkedinIcon from "@/assets/linkedIn-icon.png";
import githubIcon from "@/assets/github-icon.png";

type ProfileDetailsProps = {
  birth: string;
  residence: string;
  education: string;
  military: string;
  resume: string;
};

export function ProfileDetails({
  birth,
  residence,
  education,
  military,
  resume,
}: ProfileDetailsProps) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="flex gap-5">
      {/* 기본 정보 */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <p className="text-xs text-white bg-[#008ee3] pl-2">
          {t("section.profileNav.basicInfo.sectionTitle")}
        </p>
        <div>
          <p className="text-gray-500 text-sm">
            {t("section.profileNav.basicInfo.birth")}
          </p>
          <p className="text-sm">{birth}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">
            {t("section.profileNav.basicInfo.residence")}
          </p>
          <p className="text-sm ">{residence}</p>
        </div>
      </div>

      {/* 학력/병역 */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <p className="text-xs text-white bg-[#008ee3] pl-2">
          {t("section.profileNav.educationMilitary.sectionTitle")}
        </p>
        <div>
          <p className="text-gray-500 text-sm">
            {t("section.profileNav.educationMilitary.education")}
          </p>
          <p className="text-sm">{education}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">
            {t("section.profileNav.educationMilitary.military")}
          </p>
          <p className="text-sm">{military}</p>
        </div>
      </div>

      {/* 링크 */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <p className="text-xs text-white bg-[#008ee3] pl-2">
          {t("section.profileNav.etc.sectionTitle")}
        </p>
        <a
          href={`https://${commonProfileData.links.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline text-gray-700 flex items-center gap-1.5"
        >
          <Image src={githubIcon} alt={"githubIcon"} className="w-4" />
          {commonProfileData.links.github}
        </a>
        <a
          href={`https://${commonProfileData.links.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline text-gray-700 flex items-center gap-1.5"
        >
          <Image src={linkedinIcon} alt={"linkedinIcon"} className="w-4" />
          {commonProfileData.links.linkedin}
        </a>
        <a
          href={`/resume_${locale}.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline text-gray-700 flex items-center gap-1.5"
        >
          <FileUser className="w-4 text-gray-700" />
          {resume}
        </a>
        {/* <a
          href={`https://${commonProfileData.links.notion}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline text-gray-700"
        >
          {commonProfileData.links.notion}
        </a> */}
      </div>
    </div>
  );
}
