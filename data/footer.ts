type Footer = {
  LastUpdated: string;
  CreatedBy: string;
};

const LastUpdatedYear = "2026";
const LastUpdatedMonth = "01";
const LastUpdatedDay = "06";

export const footerData: Record<"ko" | "en", Footer> = {
  ko: {
    LastUpdated: `마지막 수정일: ${LastUpdatedYear}.${LastUpdatedMonth}.${LastUpdatedDay}`,
    CreatedBy: "작성자: 권동우 (Dongwoo Kwon)",
  },
  en: {
    LastUpdated: `Last Updated: ${LastUpdatedMonth}/${LastUpdatedDay}/${LastUpdatedYear}`,
    CreatedBy: "Created by Dongwoo Kwon (권동우)",
  },
};
