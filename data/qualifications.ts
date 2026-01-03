type Qualification = {
  category: string;
  name: string;
  name_url: string,
  achievement: string;
  achievement_url: string;
  organization: string;
  date: string;
};

export const qualificationsData: Record<"ko" | "en", Qualification[]> = {
  ko: [
    {
      category: "자격증",
      name: "정보처리기능사",
      name_url: "https://www.q-net.or.kr/crf005.do?id=crf00503&jmCd=1320",
      achievement: "2025년 4회 취득",
      achievement_url: "/정보처리기능사증명서.pdf",
      organization: "과학기술정보통신부",
      date: "2025.12.24",
    },
    {
      category: "역량평가",
      name: "TOPCIT 제23회",
      name_url: "https://www.topcit.or.kr/home.do",
      achievement: "527점",
      achievement_url: "/탑싯성적증명서.pdf",
      organization: "과학기술정보통신부",
      date: "2025.05.24",
    },
  ],
  en: [
    {
      category: "Certification",
      name: "정보처리기능사 (Information Processing Technician)",
      name_url: "https://www.q-net.or.kr/crf005.do?id=crf00503&jmCd=1320",
      achievement: "Obtained in the 4th Session of 2025",
      achievement_url: "/정보처리기능사증명서.pdf",
      organization: "Ministry of Science and ICT",
      date: "12/24/2025",
    },
    {
      category: "Competency Assessment",
      name: "TOPCIT 23rd Session",
      name_url: "https://www.topcit.or.kr/home.do",
      achievement: "527 points",
      achievement_url: "/탑싯성적증명서.pdf",
      organization: "Ministry of Science and ICT",
      date: "05/24/2025",
    },
  ],
};
