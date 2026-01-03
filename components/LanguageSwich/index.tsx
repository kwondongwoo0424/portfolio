"use client";

import { usePathname, useRouter } from "next/navigation";

const LanguageSwitch = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex gap-2 justify-end">
      <a
        onClick={() => router.push(pathname.replace("/en", "/ko"))}
        className="cursor-pointer text-[#0e7490] hover:underline"
      >
        한국어
      </a>
      <a
        onClick={() => router.push(pathname.replace("/ko", "/en"))}
        className="cursor-pointer text-[#0e7490] hover:underline"
      >
        English
      </a>
    </div>
  );
};

export default LanguageSwitch;
