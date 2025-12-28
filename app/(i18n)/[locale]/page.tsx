import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("Intro");

  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
}