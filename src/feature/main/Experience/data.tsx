import { ExperienceSectionType } from "./type";
import { StepContentFrame } from "./Section/StepContentFrame";
import { SpringLogo, ThymeleafLogo } from "assets/images/logo";

export const experienceData: ExperienceSectionType[] = [
  {
    title: "Fujinet System JSC (2/2023 - 1/2025)",
    stepData: [
      {
        dotTitle: "02/2023",
        content: (
          <StepContentFrame
            projectName="Shopping"
            summary="Trial project use Spring MVC"
            technicalLogoUrls={[SpringLogo, ThymeleafLogo]}
            description="I receive design of mentor and coding it within half a month."
          />
        ),
      },
    ],
  },
];
