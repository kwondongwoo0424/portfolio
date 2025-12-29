"use client";

import { useTranslations } from "next-intl";

export function IntroSection() {
  const t = useTranslations();

  return <h1>{t("headline")}</h1>;
}