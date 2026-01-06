import { getLocale, getTranslations } from "next-intl/server";
import { featuredProjectsData } from "@/data/featuredProjects";
import SectionWrapper from "../common/SectionWrapper";
import ProjectSectionBox from "./ProjectSectionBox";

const FeaturedProjectSection = async () => {
  const t = await getTranslations();
  const locale = (await getLocale()) as "ko" | "en";
  const featuredProjects = featuredProjectsData[locale];

  return (
    <SectionWrapper title={t("section.featuredProject.sectionTitle")}>
      <div>
        {featuredProjects.map((featuredProject, index) => (
          <div key={index}>
            <div className="flex w-full justify-between items-end">
              <h3 className="font-bold text-xl">{featuredProject.title}</h3>
              <span>{featuredProject.projectDuration}</span>
            </div>

            {/* 팀원 */}
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-medium text-xl">
                  {featuredProject.projectMembers.title}
                </h4>
                <div>
                  <span className="flex gap-2 items-center">
                    <p>{featuredProject.projectMembers.content.total}</p>
                    <p className="font-semibold text-sm">|</p>
                    <p>{featuredProject.projectMembers.content.frontend}</p>
                    <p className="font-semibold text-sm">|</p>
                    <p>{featuredProject.projectMembers.content.backend}</p>
                  </span>
                  <p>{featuredProject.projectMembers.content.role}</p>
                </div>
              </div>

              {/* 개요 */}
              <ProjectSectionBox title={featuredProject.summary.title}>
                {featuredProject.summary.content}
              </ProjectSectionBox>

              {/* 핵심 문제 */}
              <ProjectSectionBox title={featuredProject.keyChallenges.title}>
                {featuredProject.keyChallenges.content}
              </ProjectSectionBox>

              {/* 해결 아이디어 */}
              <ProjectSectionBox
                title={featuredProject.solution.title}
                className="whitespace-pre-line"
              >
                {featuredProject.solution.content}
              </ProjectSectionBox>

              {/* 주요 기능 */}
              <ProjectSectionBox
                title={featuredProject.majorFunctions.title}
                className="whitespace-pre-line"
              >
                {featuredProject.majorFunctions.content}
              </ProjectSectionBox>

              {/* 기술 스택 */}
              <div>
                <h4 className="font-medium text-xl">
                  {featuredProject.techStacks.title}
                </h4>
                <div className="flex flex-col gap-2">
                  {featuredProject.techStacks.content.map(
                    (techStack, index) => (
                      <div key={index}>
                        <h6 className="font-semibold">{techStack.name}</h6>
                        <p className="text-sm whitespace-pre-line">
                          {techStack.reason}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* 주요 활동 */}
              <div>
                <h4 className="font-medium text-xl">
                  {featuredProject.activities.title}
                </h4>
                <div className="flex flex-col gap-5">
                  {featuredProject.activities.content.map(
                    (activitie, index) => (
                      <div key={index}>
                        <h6 className="font-semibold">{activitie.title}</h6>
                        <p className="text-sm">{activitie.content}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* 트러블 슈팅 */}
              <div>
                <h4 className="font-medium text-xl">
                  {featuredProject.troubleShootings.title}
                </h4>
                {featuredProject.troubleShootings.content.map(
                  (troubleShooting, index) => (
                    <div key={index}>
                      <h6 className="font-semibold">{troubleShooting.title}</h6>
                      <div className="flex flex-col gap-3 text-sm">
                        <p>{troubleShooting.issue}</p>
                        <p>{troubleShooting.cause}</p>
                        <p>{troubleShooting.resolutionProcess}</p>
                        <p>{troubleShooting.resolution}</p>
                        <p>{troubleShooting.resultAndLesson}</p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* 느낀점 */}
              <ProjectSectionBox
                title={featuredProject.personalReflections.title}
                className="whitespace-pre-line"
              >
                {featuredProject.personalReflections.content}
              </ProjectSectionBox>

              {/* 기타 활동 */}
              <div>
                <h4 className="font-medium text-xl">
                  {featuredProject.otherActivities.title}
                </h4>
                {featuredProject.otherActivities.content.map(
                  (otherActivitie, index) => (
                    <div
                      key={index}
                      className="w-full flex justify-between text-sm"
                    >
                      <p>{otherActivitie.title}</p>
                      <p className="text-gray-600">{otherActivitie.period}</p>
                    </div>
                  )
                )}
              </div>

              {/* 참고 자료 */}
              <div>
                <h4 className="font-medium text-xl">
                  {featuredProject.references.title}
                </h4>
                <div className="flex flex-col gap-1">
                  {featuredProject.references.content.map(
                    (reference, index) => (
                      <div
                        key={index}
                        className="w-full flex justify-between text-sm"
                      >
                        <p>{reference.title}</p>
                        <a
                          href={reference.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline text-gray-700 flex items-center gap-1.5 min-w-0"
                        >
                          {reference.url}
                        </a>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturedProjectSection;
