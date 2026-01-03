"use client";

import { useLocale, useTranslations } from "next-intl";
import { qualificationsData } from "@/data/qualifications";

export function QualificationsSection() {
  const t = useTranslations();
  const locale = useLocale() as "ko" | "en";
  const qualifications = qualificationsData[locale];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-[#008ee3]">
        {t("section.qualifications.sectionTitle")}
      </h1>
      <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
        <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left pb-1 px-4 font-medium text-gray-600">{t("section.qualifications.category")}</th>
            <th className="text-left pb-1 px-4 font-medium text-gray-600">{t("section.qualifications.name")}</th>
            <th className="text-left pb-1 px-4 font-medium text-gray-600">{t("section.qualifications.achievement")}</th>
            <th className="text-left pb-1 px-4 font-medium text-gray-600">{t("section.qualifications.organization")}</th>
            <th className="text-left pb-1 px-4 font-medium text-gray-600">{t("section.qualifications.date")}</th>
          </tr>
        </thead>
        <tbody>
          {qualifications.map((qual, index) => (
            <tr key={index} className="border-b border-gray-200 transition-colors">
              <td className="py-2 px-4 text-sm text-gray-700">{qual.category}</td>
              <td className="py-2 px-4 text-sm">
                <a
                  href={qual.name_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0e7490] hover:underline"
                >
                  {qual.name}
                </a>
              </td>
              <td className="py-2 px-4 text-sm">
                <a
                  href={qual.achievement_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0e7490] hover:underline"
                >
                  {qual.achievement}
                </a>
              </td>
              <td className="py-2 px-4 text-sm text-gray-700">{qual.organization}</td>
              <td className="py-2 px-4 text-sm text-gray-700">{qual.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
