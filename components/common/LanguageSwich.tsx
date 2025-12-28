"use client";

import { usePathname, useRouter } from "next/navigation";

const LanguageSwitch = () => {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = () => {
    if (pathname.startsWith("/ko")) {
      router.push(pathname.replace("/ko", "/en"));
    } else {
      router.push(pathname.replace("/en", "/ko"));
    }
  };

  return (
    <button onClick={switchLanguage}>
      언어 변경
    </button>
  );
};

export default LanguageSwitch;