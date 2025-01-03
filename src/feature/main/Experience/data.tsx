import {ExperienceSectionType} from "./type";
import {StepContentFrame} from "./Section/StepContentFrame";
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
import {TFunction} from "i18next";

export const experienceData = (t: TFunction): ExperienceSectionType[] => [
	{
		title: (
			<>
				<img src={FujinetLogo} alt="" height={"30px"} style={{borderRadius: 3}}/>
				<span>Fujinet System JSC (2/2023 - 1/2025)</span>
			</>
		),
		stepData: [
			{
				dotTitle: "02/2023",
				content: (
					<StepContentFrame
						projectName="Shopping system (02/2023)"
						position={"Trial software developer"}
						summary={t("experience.shoppingSystem.summary")}
            projectFeatures={["Search", "Add", "Edit", "Delete", "Order", "Shop cart"]}
						projectTechnologyLogos={[SpringLogo, ThymeleafLogo, PostgreLogo]}
						teamSize={1}
						role={t("experience.shoppingSystem.role")}
						result={t("experience.shoppingSystem.result")}
					/>
				),
			},
			{
				dotTitle: "03/2023",
				content: (
					<StepContentFrame
						projectName="Urikata system (03/2023)"
						position={"Trial software developer"}
						summary={t("experience.urikataSystem.summary")}
						projectTechnologyLogos={[KnockoutJS, PostgreLogo]}
						teamSize={1}
						role={t("experience.urikataSystem.role")}
						result={t("experience.urikataSystem.result")}
					/>
				),
			},
			{
				dotTitle: "04/2023 - 01/2025",
				content: (
					<StepContentFrame
						projectName="Knowledge Portal (04/2023 - 01/2025)"
						position={"Software developer"}
						summary={t("experience.knowledgePortal.summary")}
						projectTechnologyLogos={[
							ReactLogo,
							Yii2Logo,
							MySQLLogo,
							DockerLogo,
							AWSLogo,
						]}
						teamSize={10}
						role={t("experience.knowledgePortal.role")}
						issues={t("experience.knowledgePortal.issues")}
						result={t("experience.knowledgePortal.result")}
						projectLink="https://www.siba-service.jp/service/knowledge-portal/"
					/>
				),
			},
			{
				dotTitle: "09/2024 - 01/2025",
				content: (
					<StepContentFrame
						projectName="Knowledge Portal Gateway (09/2023 - 01/2025)"
						position={"Software developer"}
						summary={t("experience.knowledgePortalGateway.summary")}
						projectTechnologyLogos={[PythonLogo]}
						teamSize={1}
						role={t("experience.knowledgePortalGateway.role")}
						result={t("experience.knowledgePortalGateway.result")}
					/>
				),
			},
		],
	},
];
