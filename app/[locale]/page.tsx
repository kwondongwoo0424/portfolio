import IntroSection from "@/components/IntroSection";
import LanguageSwitch from "@/components/LanguageSwich";
import QualificationsSection from "@/components/QualificationsSection";
import TechStacksSection from "@/components/TechStacksSection";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-3xl w-full flex flex-col gap-2 max-[600px]:px-4 pb-4">
        <LanguageSwitch />
        <div className="flex flex-col gap-8">
          <IntroSection />
          <TechStacksSection />
          <QualificationsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
