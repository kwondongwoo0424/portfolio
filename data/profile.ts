type LocaleData = {
  name: string;
  major: string;
  birth: string;
  residence: string;
  education: string;
  military: string;
  status: string;
  introduction: {
    paragraph1: string;
    paragraph2: string;
  };
  portfolio: string;
};

export const localeProfileData: Record<"ko" | "en", LocaleData> = {
  ko: {
    name: "권동우 (Dongwoo Kwon)",
    major: "프론트엔드 개발자",
    birth: "2008.04.24 (남, 한국인)",
    residence: "대한민국 경상북도 경주시",
    education: "대구소프트웨어마이스터고 24.03. ~ 27.02 (졸업 예정)",
    military: "미필",
    status: "구직 중",
    introduction: {
      paragraph1:
        "보다 나은 개발자가 되기 위해 끊임없이 도전하며, 실패 속에서 배움을 얻고 성장하고 있습니다.",
      paragraph2:
        "“나를 죽이지 못하는 것은 나를 더 강하게 만든다” 는 니체의 말처럼, 실패를 성장의 발판으로 삼아 더 나은 개발자로 나아가고 있습니다.",
    },
    portfolio: "포트폴리오",
  },
  en: {
    name: "Dongwoo Kwon (권동우)",
    major: "Frontend Developer",
    birth: "2008.04.24 (Male, Korean)",
    residence: "Gyeongju, Gyeongsangbuk-do, South Korea",
    education:
      "Daegu Software Meister High School (Mar. 2024 - Feb. 2027, Expected Graduation)",
    military: "unfulfilled",
    status: "Open to Work",
    introduction: {
      paragraph1:
        "I continuously challenge myself to become a better developer, learning and growing from failures.",
      paragraph2:
        "Like Nietzsche's quote, “What does not kill me makes me stronger”, I use failure as a stepping stone to become a better developer.",
    },
    portfolio: "Portfolio",
  },
};

export const commonProfileData = {
  phone: "+82 10-8786-9260",
  email: "hyeonggyugwon3@gmail.com",
  links: {
    github: "github.com/kwondongwoo0424",
    linkedin: "linkedin.com/",
    notion: "",
  },
} as const;
