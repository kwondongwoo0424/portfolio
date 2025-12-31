import { IntroSection } from "@/components/IntroSection";
import LanguageSwitch from "@/components/LanguageSwich";

export default function PortfolioPage() {
  return (
    <div className="flex justify-center">
      <div className="w-7/12">
        <LanguageSwitch />
        <IntroSection />
      </div>
    </div>
  );
}
