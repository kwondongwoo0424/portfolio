"use client";

import { useTranslations } from "next-intl";
import { techStacksData } from "@/data/techStacks";
import TechStackBox from "./TechStackBox";

const TechStacksSection = () => {
  const t = useTranslations();
  const techStack = techStacksData;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-[#008ee3]">
        {t("section.techStack.sectionTitle")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {techStack.map((category, index) => (
          <TechStackBox
            key={index}
            title={category.title}
            stacks={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStacksSection;
