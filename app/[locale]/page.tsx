import { IntroSection } from "@/components/IntroSection";
import LanguageSwitch from "@/components/LanguageSwich";

export default function PortfolioPage() {
  return (
    <div className="flex justify-center">
      <div className="min-w-96">
        <LanguageSwitch />
        <IntroSection />
      </div>
    </div>
  );
}
