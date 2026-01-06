import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["ko", "en"],
  defaultLocale: "en",
  localeDetection: true
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /ko나 /en이 아닌 경로는 브라우저 언어 감지해서 루트로 리다이렉트
  if (!pathname.startsWith("/ko") && !pathname.startsWith("/en") && pathname !== "/") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const locale = acceptLanguage.toLowerCase().includes("ko") ? "ko" : "en";
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // /ko/xxx 또는 /en/xxx 형태인데 존재하지 않는 경로면 해당 언어 루트로
  if (pathname.startsWith("/ko/") || pathname.startsWith("/en/")) {
    const locale = pathname.startsWith("/ko") ? "ko" : "en";
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/",
    "/(ko|en)/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
