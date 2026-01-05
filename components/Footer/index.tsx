import { getLocale } from "next-intl/server";
import { footerData } from "@/data/footer";

const Footer = async () => {
  const locale = (await getLocale()) as "ko" | "en";
  const footer = footerData[locale];

  return (
    <div>
      <p className="text-center text-sm text-gray-600">{footer.LastUpdated}</p>
      <p className="text-center text-sm text-gray-600">{footer.CreatedBy}</p>
    </div>
  );
};

export default Footer;
