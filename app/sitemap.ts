import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kwondongwoo.com/ko",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://kwondongwoo.com/en",
        },
      },
    },
    {
      url: "https://kwondongwoo.com/en",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ko: "https://kwondongwoo.com/ko",
        },
      },
    },
  ];
}