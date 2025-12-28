export const getLangFromPath = (pathname: string) => {
  if (pathname.startsWith("/en")) return "en";
  return "ko";
};

export const switchLangPath = (pathname: string) => {
  if (pathname.startsWith("/ko")) {
    return pathname.replace("/ko", "/en");
  }
  if (pathname.startsWith("/en")) {
    return pathname.replace("/en", "/ko");
  }
  return "/ko";
};