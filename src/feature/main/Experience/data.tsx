import { ExperienceSectionType } from "./type";
import { StepContentFrame } from "./Section/StepContentFrame";
import { FujinetLogo, SpringLogo, ThymeleafLogo } from "assets/images/logo";

export const experienceData: ExperienceSectionType[] = [
  {
    title: (
      <>
        <img src={FujinetLogo} alt="" height={"30px"} />
        <span>Fujinet System JSC (2/2023 - 1/2025)</span>
      </>
    ),
    stepData: [
      {
        dotTitle: "02/2023",
        content: (
          <StepContentFrame
            projectName="Shopping (02/2023)"
            summary="Trial project use Spring MVC"
            technicalLogoUrls={[SpringLogo, ThymeleafLogo]}
            description="I receive design of mentor and coding it within half a month."
          />
        ),
      },
      {
        dotTitle: "02/2023",
        content: (
          <StepContentFrame
            projectName="Shopping (02/2023)"
            summary="Trial project use Spring MVC"
            technicalLogoUrls={[SpringLogo, ThymeleafLogo]}
            description="I receive design of mentor and coding it within half a month."
          />
        ),
      },
    ],
  },
  {
    title: (
      <>
        <img src={FujinetLogo} alt="" height={"30px"} />
        <span>Fujinet System JSC (2/2023 - 1/2025)</span>
      </>
    ),
    stepData: [
      {
        dotTitle: "02/2023",
        content: (
          <StepContentFrame
            projectName="Shopping (02/2023)"
            summary="Trial project use Spring MVC"
            technicalLogoUrls={[SpringLogo, ThymeleafLogo]}
            description="I receive design of mentor and coding it within half a month."
          />
        ),
      },
    ],
  },
];
