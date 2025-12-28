import type { Metadata } from "next";
import "@/styles/globals.css"

export const metadata: Metadata = {
  keywords: ["프론트엔드", "개발자", "포트폴리오", "frontend", "developer", "portfolio"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
