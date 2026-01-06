import { getTranslations } from "next-intl/server";
import { techStacksData } from "@/data/techStacks";
import TechStackBox from "./TechStackBox";
import SectionWrapper from "@/components/common/SectionWrapper";

const TechStacksSection = async () => {
  const t = await getTranslations();

  return (
    <SectionWrapper title={t("section.techStack.sectionTitle")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {techStacksData.map((category, index) => (
          <TechStackBox
            key={index}
            title={category.title}
            stacks={category.skills}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStacksSection;
