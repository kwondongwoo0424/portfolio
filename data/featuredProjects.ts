type ContentSection = {
  title: string;
  content: string;
};

type TechStack = {
  name: string;
  reason: string;
};

type Activity = {
  title: string;
  content: string;
};

type TroubleShooting = {
  title: string;
  issue: string;
  cause: string;
  resolutionProcess: string;
  resolution: string;
  resultAndLesson: string;
};

type OtherActivity = {
  title: string;
  period: string;
};

type Reference = {
  title: string;
  url: string;
};

type FeaturedProject = {
  title: string; // 프로젝트명
  projectMembers: {
    title: string;
    content: {
      total: string; // 총원
      frontend: string; // 프론트엔드 인원
      backend: string; // 백엔드 인원
      role: string; // 본인 역할
    };
  };
  projectDuration: string;
  summary: ContentSection; // 개요
  keyChallenges: ContentSection; //핵심 문제
  solution: ContentSection;
  majorFunctions: ContentSection; // 주요 기능
  techStacks: {
    title: string;
    content: TechStack[];
  };
  activities: {
    title: string;
    content: Activity[];
  };
  troubleShootings: {
    title: string;
    content: TroubleShooting[];
  };
  personalReflections: ContentSection; // 느낀 점
  otherActivities: {
    title: string;
    content: OtherActivity[];
  };
  references: {
    title: string;
    content: Reference[];
  };
};

export const featuredProjectsData: Record<"ko" | "en", FeaturedProject[]> = {
  ko: [
    {
      title: "Sync SaaS",
      projectMembers: {
        title: "팀원",
        content: {
          total: "총 7명",
          frontend: "프론트엔드 4명(본인포함)",
          backend: "백엔드 3명",
          role: "본인 역할: Frontend Developer & UI/UX Designer",
        },
      },
      projectDuration: "2025.03 ~ 2025.10",
      summary: {
        title: "개요",
        content: [
          "디자이너, 기획자 같은 비개발자와 개발자 간의 기술 격차로 인해 발생하는 의사소통 문제와 협업 비효율을 해결하기 위한 AI 기반 프로젝트 관리 데스크톱 앱입니다.",
          "지식 격차를 AI가 보완하고, 팀원 간 실시간 협업 환경을 제공하는 것이 핵심 목표입니다.",
        ].join("\n"),
      },
      keyChallenges: {
        title: "핵심 문제",
        content: [
          "현업에서는 디자이너, PM(프로덕트 매니저), 기획자 등 비개발자와 개발자 간의 협업이 필수적이다. 하지만 이들 사이에는 뚜렷한 기술 격차가 존재한다.",
          "비개발자는 서비스 방향성과 시장의 흐름을 가장 잘 이해하지만, 개발 지식이 부족해 개발자와의 소통에 어려움을 겪는다.",
          "개발자는 기술적 문제를 해결할 수 있지만, 때로는 사용자의 맥락이나 비즈니스 니즈를 놓칠 수 있다.",
          "이러한 협업의 단절은 프로젝트 방향성 왜곡, 시간 낭비, 피로감을 초래한다.",
        ].join("\n"),
      },
      solution: {
        title: "해결 아이디어",
        content: [
          "- 비개발자는 AI의 도움을 받아 기술적 이해도를 높이고, 자신의 의도를 더 정확하게 표현할 수 있다.",
          "- 개발자는 비개발자의 요구사항을 명확하게 이해하고, 실시간 협업 에디터를 통해 즉시 피드백하고 구현할 수 있다.",
          "- 개발자와 비개발자의 커뮤니케이션을 최소 비용으로 만든다.",
        ].join("\n"),
      },
      majorFunctions: {
        title: "주요 기능",
        content: [
          "- 워크스페이스, 프로젝트 기반 팀 협업 (생성/참여/초대/워크스페이스, 프로젝트 멤버 관리)",
          "- 이슈 트래킹 시스템 (상태 관리, 담당자 지정, 댓글)",
          "- 칸반 보드 (드래그&드롭 작업 관리)",
          "- Docs 문서 (기능명세서, 기능명세서 기반 ERD 자동생성)",
          "- 대시보드 & 분석 (차트, 진행률 시각화)",
          "- AI 기능 (단어 정의 검색, 프로젝트의 컨텍스트를 이해한 챗봇)",
        ].join("\n"),
      },
      techStacks: {
        title: "기술 스택",
        content: [
          {
            name: "React",
            reason:
              "상태 변화가 많은 화면을 빠르게 구성하기 위해 선택. 컴포넌트 기반으로 UI를 구성하고 효율적인 상태 관리가 가능.",
          },
          {
            name: "TypeScript",
            reason:
              "협업과 유지보수에 필요한 타입 안정성을 확보하기 위해 사용. JavaScript의 동적 타입을 보완해 주며, 코드 품질 향상 및 버그 예방.",
          },
          {
            name: "Electron",
            reason: [
              "기존에 익숙한 웹 기술을 활용해 데스크탑 앱을 개발하기 위함.",
              "macOS와 Windows 등 다양한 환경에서 동일한 UX를 제공하기 위한 멀티 플랫폼 지원.",
              "브라우저 환경과 유사한 개발 흐름을 유지하며 개발 속도와 생산성을 확보할 수 있음.",
            ].join("\n"),
          },
          {
            name: "Styled-components",
            reason:
              "컴포넌트 단위로 스타일을 일관성 있게 관리하기 위해 사용. CSS-in-JS 방식을 통해 스타일과 로직을 동일한 파일 내에서 관리하며, 코드의 유지보수성을 높임.",
          },
        ],
      },
      activities: {
        title: "주요 활동",
        content: [
          {
            title: "디자인 시스템 구축 (sync-design-system)",
            content: [
              "UI와 컴포넌트의 일관성이 부족해 유지보수와 재사용에 어려움이 있었습니다.",
              "이를 해결하기 위해 재사용 가능한 공통 컴포넌트 15개를 추출했습니다.",
              "추출한 컴포넌트는 npm 패키지(@sync-design-system)로 배포하여 팀 내에서 공유했습니다.",
              "Storybook을 활용해 컴포넌트를 문서화하고 사용 가이드를 제공했습니다.",
              "체계적인 컴포넌트 설계를 통해 개발 효율을 높이고 UI 일관성을 확보했습니다.",
            ].join("\n"),
          },
          {
            title: "React Query 캐싱으로 이슈 페이지 로딩 시간 단축",
            content: [
              "사용자가 이슈 목록과 상세 페이지를 이동할 때마다 API가 재호출되어 평균 2초의 로딩 시간이 발생하고, 동일한 데이터를 반복 요청해 서버 부하가 증가하는 문제가 있었습니다.",
              "이를 해결하기 위해 React Query를 도입해 이슈 데이터를 자동으로 캐싱하도록 개선했습니다.",
              "이슈 목록은 비교적 자주 변경되는 데이터 특성을 고려해 staleTime을 2분으로 설정하고, 신선한 데이터는 재요청 없이 즉시 표시되도록 구성했습니다.",
              "그 결과 캐싱 전략을 통해 성능과 사용자 경험을 동시에 개선할 수 있었습니다.",
            ].join("\n"),
          },
          {
            title: "낙관적 업데이트로 할 일 체크 반응성 개선",
            content: [
              "할 일 완료 체크 시 서버 응답을 기다리면서 0.5~1초의 지연이 발생해 사용자 경험이 저하되는 문제가 있었습니다.",
              "이를 해결하기 위해 React Query의 낙관적 업데이트를 적용해 사용자 입력 즉시 UI가 반영되도록 개선했습니다.",
              "그 결과 체감 응답 속도를 평균 800ms에서 0ms 수준으로 단축할 수 있었습니다.",
              "또한 네트워크 요청 실패 시 자동 롤백과 에러 토스트를 제공해 안정적인 사용자 경험을 유지했습니다.",
            ].join("\n"),
          },
          {
            title: "불필요한 스켈레톤 UI 제거",
            content: [
              "워크스페이스 카드에 스켈레톤 UI를 적용했으나 로딩 시 짧게 나타났다 사라지는 플래시 현상이 발생했습니다.",
              "Chrome DevTools로 API 응답 시간을 측정한 결과 평균 180ms로 매우 짧은 로딩 시간이 확인되었습니다.",
              "이로 인해 스켈레톤 UI가 표시되자마자 사라지며 시각적 노이즈로 작용하는 문제가 있었습니다.",
              "스켈레톤 UI를 제거하고 데이터 도착 즉시 콘텐츠를 렌더링하도록 개선해 깜빡임 없는 깔끔한 로딩 경험을 제공했습니다.",
            ].join("\n"),
          },
          {
            title: "베타테스트 랜딩 페이지(sync introduce) 개발",
            content: [
              "GitHub Pages와 커스텀 도메인을 활용해 베타테스트 신청용 랜딩 페이지를 구축했습니다.",
              "GitHub Releases 기반으로 Windows와 macOS 설치 파일을 배포했습니다.",
              "이를 통해 제품 검증을 위한 효율적인 베타 배포 전략을 수립하고 실행한 경험을 쌓았습니다.",
            ].join("\n"),
          },
          {
            title: "SEO 최적화를 통해 자연 검색 유입 개선",
            content: [
              "Sync Desktop의 검색 노출 개선과 자연 유입 증대를 위해 랜딩 페이지(Sync-introduce)의 SEO 최적화를 진행했습니다.",
              "sitemap.xml과 robots.txt 설정, 메타태그 최적화를 통해 검색엔진 크롤링 효율을 개선했습니다.",
              "커스텀 도메인을 적용하고 Lighthouse 기준 SEO 점수 100점을 달성했습니다.",
              "기술적 SEO 구현을 통해 유기적인 사용자 유입 경로를 확보했습니다.",
              "이 과정을 통해 검색엔진 크롤링 메커니즘에 대한 이해와 기술적 구현 경험을 쌓았습니다.",
            ].join("\n"),
          },
        ],
      },
      troubleShootings: {
        title: "트러블 슈팅",
        content: [
          {
            title: "SSE 스트리밍 응답의 과도한 리렌더링 최적화",
            issue:
              "SSE를 활용해 사용자가 텍스트를 드래그하면 실시간으로 AI가 단어를 설명해주는 기능을 구현하던 중, 응답이 화면에 표시되는 동안 화면이 끊기고 버벅거리는 문제가 발생했습니다.",
            cause:
              "매 청크 수신마다 setState가 호출되어 n개의 청크를 받을 경우 n번의 리렌더링이 발생했고, 이로 인해 매번 Virtual DOM 생성과 Diffing 과정이 반복되면서 전체 성능 저하로 이어졌습니다.",
            resolutionProcess: [
              "이 문제를 해결하기 위해 Thrott ling과 Debouncing의 두 가지 방식을 고민하였습니다.",
              "Throttling",
              "- 일정 간격마다 렌더링을 시도하기 때문에 타이핑 효과가 일정하고 부드러움",
              "- 그러나 새로운 청크가 도착하지 않는 구간에서도 주기적으로 렌더링이 발생하여, 불필요한 렌더링이 발생됨",
              "Debouncing",
              "- 청크가 연속적으로 수신되는 동안에는 렌더링을 지연",
              "- 일정 시간동안 새로운 청크가 수신되지 않을 때 한 번만 렌더링 실행",
              "Thrott ling은 타이핑 애니메이션이 자연스럽다는 장점이 있었지만, 불필요한 렌더링이 발생해 성능적인 문제가 남아 있었음.",
              "반면 Debouncing은 타이핑 효과는 약간 덜 자연스러울 수 있으나, 렌더링 횟수를 크게 줄여 UI 끊김 문제를 가장 효과적으로 해소할 수 있었음.",
              "이러한 이유로 최종적으로 Debouncing 방식을 선택했습니다.",
            ].join("\n"),
            resolution: [
              "Debouncing + useRef 기반 버퍼링 패턴 적용",
              "useRef를 중간 버퍼로 활용해 리렌더링 없이 데이터를 누적했습니다.",
              "연속으로 도착하는 청크로 인한 잦은 렌더링을 방지하기 위해 50ms 디바운싱을 적용했습니다.",
              "이전 타이머를 취소하고 마지막 청크 기준으로 한 번만 setState가 호출되도록 처리했습니다.",
              "그 결과 청크는 실시간으로 버퍼에 쌓이되, 50ms 동안 추가 입력이 없을 때만 화면이 갱신되도록 최적화했습니다.",
            ].join("\n"),
            resultAndLesson: [
              "setState 호출 횟수를 대폭 줄여 UI 끊김 문제를 해결했습니다.",
              "Throttling과 Debouncing 등 렌더링 최적화 기법을 실전에서 적용한 경험을 쌓았습니다.",
              "이를 통해 React의 렌더링 메커니즘에 대한 깊이 있는 이해를 확보했습니다.",
            ].join("\n"),
          },
        ],
      },
      personalReflections: {
        title: "느낀 점",
        content: [
          "7개월 동안 팀 프로젝트를 진행하며 팀워크는 저절로 만들어지지 않는다는 것을 깨달았습니다.",
          "서로의 경험이 달라 의견 충돌도 있었고, 의도를 충분히 이해하지 못해 어려움을 겪기도 했습니다.",
          "하지만 대화를 통해 작은 오해도 금방 풀 수 있었고, 문제 해결보다 중요한 것은 서로를 이해하려는 태도라는 것을 배웠습니다.",
          "이번 프로젝트를 통해 기능을 만드는 것뿐 아니라, 팀이 함께 성장하는 과정의 가치를 느낄 수 있었습니다.",
        ].join("\n"),
      },
      otherActivities: {
        title: "기타 활동",
        content: [
          {
            title: "FIX 2025 대한민국 ICT 융합 엑스포 부스 운영",
            period: "2025.10.22 ~ 2025.10.25",
          },
          {
            title: "2025 IT CE 프로젝트 3등 수상",
            period: "2025.10.24",
          },
        ],
      },
      references: {
        title: "참고 자료",
        content: [
          {
            title: "Sync-Desktop 소스코드",
            url: "https://github.com/AICT-SYNC/sync-desktop",
          },
          {
            title: "Sync Design System 소스코드",
            url: " https://github.com/AICT-SYNC/sync-design-system",
          },
          {
            title: "Sync Design System NPM",
            url: "https://npmjs.com/package/sync-design-system",
          },
          {
            title: "Sync Introduce 소스코드",
            url: "https://github.com/AICT-SYNC/sync-introduce",
          },
          {
            title: "sync-saas 홈페이지(서비스 종료)",
            url: "https://sync-saas.com",
          },
        ],
      },
    },
  ],
  en: [
    {
      title: "Sync SaaS",
      projectMembers: {
        title: "Team",
        content: {
          total: "7 members total",
          frontend: "Frontend: 4 (including myself)",
          backend: "Backend: 3",
          role: "My Role: Frontend Developer & UI/UX Designer",
        },
      },
      projectDuration: "Mar 2025 - Oct 2025",
      summary: {
        title: "Summary",
        content: [
          "An AI-based project management desktop application designed to resolve communication gaps and collaboration inefficiencies caused by technical disparities between non-developers, such as designers and planners, and developers.",
          "The core objective is to leverage AI to bridge knowledge gaps and provide a real-time collaborative environment for team members.",
        ].join("\n"),
      },
      keyChallenges: {
        title: "Key Challenges",
        content: [
          "In real-world projects, collaboration between developers and non-developers such as designers, PMs, and planners is essential, yet a clear technical gap exists between these roles.",
          "Non-developers often have a strong understanding of service direction and market trends but face difficulties communicating their requirements due to a lack of technical knowledge.",
          "Developers are capable of resolving technical issues but may overlook user context or business needs.",
          "These disconnects in collaboration can lead to distorted project direction, wasted time, and increased team fatigue.",
        ].join("\n"),
      },
      solution: {
        title: "Solution",
        content: [
          "- Non-developers can enhance their technical understanding with AI assistance and express their intentions more accurately.",
          "- Developers can clearly understand non-developer requirements and provide immediate feedback and implementation through a real-time collaborative editor.",
          "- Communication costs between developers and non-developers are minimized.",
        ].join("\n"),
      },
      majorFunctions: {
        title: "Major Functions",
        content: [
          "- Workspace and project-based team collaboration (creation, participation, invitations, workspace and project member management)",
          "- Issue tracking system (status management, assignee assignment, comments)",
          "- Kanban board (drag-and-drop task management)",
          "- Docs (functional specifications and automatic ERD generation based on specifications)",
          "- Dashboard and analytics (charts and progress visualization)",
          "- AI features (term definition lookup, context-aware project chatbot)",
        ].join("\n"),
      },
      techStacks: {
        title: "Tech Stacks",
        content: [
          {
            name: "React",
            reason:
              "Chosen to efficiently build interfaces with frequent state changes. Enables component-based UI composition and effective state management.",
          },
          {
            name: "TypeScript",
            reason:
              "Adopted to ensure type safety required for collaboration and maintainability. Complements JavaScript's dynamic typing and improves code quality while preventing potential bugs.",
          },
          {
            name: "Electron",
            reason: [
              "Utilized to develop desktop applications using familiar web technologies.",
              "Provides multi-platform support to deliver consistent UX across macOS and Windows environments.",
              "Maintains a browser-like development workflow while ensuring development speed and productivity.",
            ].join("\n"),
          },
          {
            name: "Styled-components",
            reason:
              "Used to manage styles consistently at the component level. The CSS-in-JS approach allows styles and logic to coexist within the same file, improving maintainability.",
          },
        ],
      },
      activities: {
        title: "Activities",
        content: [
          {
            title: "Design System Development (sync-design-system)",
            content: [
              "Inconsistencies in UI and components made maintenance and reuse difficult.",
              "To address this, 15 reusable common components were extracted.",
              "These components were distributed internally as an npm package (@sync-design-system).",
              "Components were documented using Storybook, along with usage guidelines.",
              "As a result, development efficiency was improved and UI consistency was ensured through a structured component architecture.",
            ].join("\n"),
          },
          {
            title: "Reduced Issue Page Load Time Using React Query Caching",
            content: [
              "Each navigation between the issue list and detail pages triggered repeated API calls, resulting in an average loading time of 2 seconds and increased server load.",
              "To resolve this, React Query was introduced to enable automatic caching of issue data.",
              "Considering that issue lists change relatively frequently, the staleTime was set to 2 minutes so that fresh data could be displayed immediately without refetching.",
              "This caching strategy successfully improved both performance and user experience.",
            ].join("\n"),
          },
          {
            title:
              "Improved Task Completion Responsiveness with Optimistic Updates",
            content: [
              "Checking task completion caused a 0.5-1 second delay while waiting for server responses, leading to degraded user experience.",
              "React Query's optimistic update feature was applied to reflect UI changes immediately upon user interaction.",
              "As a result, perceived response time was reduced from an average of 800ms to near 0ms.",
              "Automatic rollback and error toast notifications were implemented to maintain stability in case of network failures.",
            ].join("\n"),
          },
          {
            title: "Removal of Unnecessary Skeleton UI",
            content: [
              "A skeleton UI was applied to workspace cards, but a brief flash occurred as it appeared and disappeared during loading.",
              "Chrome DevTools analysis revealed an average API response time of only 180ms.",
              "As a result, the skeleton UI acted as visual noise rather than a meaningful loading indicator.",
              "The skeleton UI was removed, and content is now rendered immediately upon data arrival, providing a clean and flicker-free loading experience.",
            ].join("\n"),
          },
          {
            title: "Beta Test Landing Page Development (sync-introduce)",
            content: [
              "A beta test application landing page was built using GitHub Pages with a custom domain.",
              "Installation files for Windows and macOS were distributed via GitHub Releases.",
              "This enabled the establishment and execution of an efficient beta distribution strategy for product validation.",
            ].join("\n"),
          },
          {
            title: "Improved Organic Search Traffic Through SEO Optimization",
            content: [
              "SEO optimization was conducted on the landing page (Sync-introduce) to improve search visibility and organic traffic for Sync Desktop.",
              "Search engine crawling efficiency was enhanced through sitemap.xml, robots.txt configuration, and meta tag optimization.",
              "A custom domain was applied, achieving a Lighthouse SEO score of 100.",
              "Technical SEO implementation secured sustainable organic user acquisition channels.",
              "Through this process, a solid understanding of search engine crawling mechanisms and technical implementation was developed.",
            ].join("\n"),
          },
        ],
      },
      troubleShootings: {
        title: "Trouble Shootings",
        content: [
          {
            title:
              "Optimization of Excessive Re-rendering in SSE Streaming Responses",
            issue:
              "While implementing an SSE-based feature that provides real-time AI explanations when users drag text, severe UI stuttering and frame drops occurred during streaming responses.",
            cause:
              "setState was called on every incoming chunk, resulting in N re-renders for N chunks. Each render triggered Virtual DOM creation and diffing, leading to overall performance degradation.",
            resolutionProcess: [
              "Both throttling and debouncing approaches were considered to address the issue.",
              "Throttling",
              "- Provides smooth and consistent typing animations by rendering at fixed intervals.",
              "- However, unnecessary renders occurred even when no new chunks arrived.",
              "Debouncing",
              "- Delays rendering while chunks are continuously received.",
              "- Executes a single render only after no new chunks arrive for a specified duration.",
              "Although throttling produced smoother animations, it caused redundant renders and residual performance issues.",
              "Debouncing slightly reduced animation naturalness but significantly decreased render frequency, effectively resolving UI stuttering.",
              "Based on this analysis, debouncing was selected as the final approach.",
            ].join("\n"),
            resolution: [
              "Applied a debouncing and useRef-based buffering pattern.",
              "useRef was used as an intermediate buffer to accumulate data without triggering re-renders.",
              "A 50ms debounce was applied to prevent excessive rendering from continuous chunk arrivals.",
              "Previous timers were canceled to ensure setState was called only once based on the final chunk.",
              "As a result, chunks accumulated in real time while the UI updated only when no new chunks arrived within 50ms.",
            ].join("\n"),
            resultAndLesson: [
              "Significantly reduced setState invocation frequency, resolving UI stuttering issues.",
              "Gained hands-on experience applying rendering optimization techniques such as throttling and debouncing.",
              "Developed a deeper understanding of React's rendering mechanism.",
            ].join("\n"),
          },
        ],
      },
      personalReflections: {
        title: "Personal Reflections",
        content: [
          "Through seven months of team-based development, I learned that teamwork does not form naturally without effort.",
          "Differences in experience led to conflicts and misunderstandings regarding intent.",
          "However, open communication helped resolve even minor misunderstandings, reinforcing that mutual understanding is more important than problem-solving alone.",
          "This project emphasized not only building features, but also the value of growing together as a team.",
        ].join("\n"),
      },
      otherActivities: {
        title: "Other Activities",
        content: [
          {
            title: "Booth Operation at FIX 2025 Korea ICT Convergence Expo",
            period: "Oct 22 - Oct 25, 2025",
          },
          {
            title: "3rd Place, 2025 IT CE Project Competition",
            period: "2025.10.24",
          },
        ],
      },
      references: {
        title: "References",
        content: [
          {
            title: "Sync-Desktop Source Code",
            url: "https://github.com/AICT-SYNC/sync-desktop",
          },
          {
            title: "Sync Design System Source Code",
            url: "https://github.com/AICT-SYNC/sync-design-system",
          },
          {
            title: "Sync Design System NPM",
            url: "https://npmjs.com/package/sync-design-system",
          },
          {
            title: "Sync Introduce Source Code",
            url: "https://github.com/AICT-SYNC/sync-introduce",
          },
          {
            title: "sync-saas Website (Service Discontinued)",
            url: "https://sync-saas.com",
          },
        ],
      },
    },
  ],
};
