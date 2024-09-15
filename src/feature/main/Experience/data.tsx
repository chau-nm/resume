import { ExperienceSectionType } from "./type";
import { StepContentFrame } from "./Section/StepContentFrame";
import {
  AWSLogo,
  DockerLogo,
  FujinetLogo,
  KnockoutJS,
  MySQLLogo,
  PostgreLogo,
  PythonLogo,
  ReactLogo,
  SpringLogo,
  ThymeleafLogo,
  Yii2Logo,
} from "assets/images/logo";
import KnowledgePortalDescription from "./dataDescription/KnowledgePortalDescription";
import KnowledgePortalGatewayDescription from "./dataDescription/KnowledgePortalGatewayDescription";

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
            technicalLogoUrls={[SpringLogo, ThymeleafLogo, PostgreLogo]}
            description="I receive design of mentor and coding it within half a month."
          />
        ),
      },
      {
        dotTitle: "03/2023",
        content: (
          <StepContentFrame
            projectName="Shopping (03/2023)"
            summary="Trial project use KnockoutJS"
            technicalLogoUrls={[KnockoutJS, PostgreLogo]}
            description="I have received a feature request and am working on the coding for a project from a customer in Japan."
          />
        ),
      },
      {
        dotTitle: "04/2023 - 01/2025",
        content: (
          <StepContentFrame
            projectName="Knowledge Portal (04/2023 - 01/2025)"
            summary="A project focused on college management."
            technicalLogoUrls={[
              ReactLogo,
              Yii2Logo,
              MySQLLogo,
              DockerLogo,
              AWSLogo,
            ]}
            description={<KnowledgePortalDescription />}
          />
        ),
      },
      {
        dotTitle: "09/2024 - 01/2025",
        content: (
          <StepContentFrame
            projectName="Knowledge Portal Gateway (09/2023 - 01/2025)"
            summary="An IoT project centered around using a QR code scanner to control door access."
            technicalLogoUrls={[PythonLogo]}
            description={<KnowledgePortalGatewayDescription />}
          />
        ),
      },
    ],
  },
];
