import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import "@/styles/globals.css";

const locales = ["ko", "en"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "ko") {
    return {
      metadataBase: new URL("https://kwondongwoo.com"),
      title: "권동우 | 프론트엔드 개발자 이력서 포트폴리오",
      description: "프론트엔드 개발자 권동우의 포트폴리오입니다.",
      keywords: ["프론트엔드", "개발자", "포트폴리오", "이력서", "웹개발", "React", "Next.js"],
      authors: [{ name: "권동우" }],
      openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://kwondongwoo.com/ko",
        title: "권동우 | 프론트엔드 개발자 이력서 포트폴리오",
        description: "프론트엔드 개발자 권동우의 포트폴리오입니다.",
        siteName: "권동우 포트폴리오",
        images: [
          {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "권동우 포트폴리오",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "권동우 | 프론트엔드 개발자 이력서 포트폴리오",
        description: "프론트엔드 개발자 권동우의 포트폴리오입니다.",
        images: ["/og-image.png"],
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    metadataBase: new URL("https://kwondongwoo.com"),
    title: "DongWoo Kwon | Frontend Developer Resume Portfolio",
    description: "Portfolio of DongWoo Kwon, a frontend developer.",
    keywords: ["frontend", "developer", "portfolio", "resume", "web development", "React", "Next.js"],
    authors: [{ name: "DongWoo Kwon" }],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://kwondongwoo.com/en",
      title: "DongWoo Kwon | Frontend Developer Resume Portfolio",
      description: "Portfolio of DongWoo Kwon, a frontend developer.",
      siteName: "DongWoo Kwon Portfolio",
      images: [
        {
          url: "/og-image-en.png",
          width: 1200,
          height: 630,
          alt: "DongWoo Kwon Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "DongWoo Kwon | Frontend Developer Resume Portfolio",
      description: "Portfolio of DongWoo Kwon, a frontend developer.",
      images: ["/og-image-en.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-35RS9VP5GJ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-35RS9VP5GJ');
            `,
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}