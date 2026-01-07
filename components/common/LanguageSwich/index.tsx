"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const LanguageSwitch = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 justify-end">
      <Link
        href={pathname.replace("/en", "/ko")}
        className="cursor-pointer text-[#0e7490] hover:underline"
      >
        한국어
      </Link>
      <Link
        href={pathname.replace("/ko", "/en")}
        className="cursor-pointer text-[#0e7490] hover:underline"
      >
        English
      </Link>
    </div>
  );
};

export default LanguageSwitch;
