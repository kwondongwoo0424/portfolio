import { IntroSection } from "@/components/IntroSection";
import LanguageSwitch from "@/components/LanguageSwich";
import { QualificationsSection } from "@/components/QualificationsSection";

export default function PortfolioPage() {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-3xl w-full flex flex-col gap-2">
        <LanguageSwitch />
        <div className="flex flex-col gap-6">
          <IntroSection />
          <div className="max-[600px]:px-4">
            <QualificationsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
