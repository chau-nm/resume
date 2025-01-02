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

export const experienceData: ExperienceSectionType[] = [
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
						summary="A trial project is assigned by the mentor to assess individual capabilities."
            projectFeatures={["Search", "Add", "Edit", "Delete", "Order", "Shop cart"]}
						projectTechnologyLogos={[SpringLogo, ThymeleafLogo, PostgreLogo]}
						teamSize={1}
						role="Receive detailed design from the mentor, then proceed with coding and testing."
						result="I completed this project in about two weeks and received feedback from my mentor that I learn and adapt quickly."
					/>
				),
			},
			{
				dotTitle: "03/2023",
				content: (
					<StepContentFrame
						projectName="Urikata system (03/2023)"
						position={"Trial software developer"}
						summary="This was a real project where my mentor assigned me specific functionalities to implement."
						projectTechnologyLogos={[KnockoutJS, PostgreLogo]}
						teamSize={1}
						role="I received a source code that had several functionalities removed and detailed designs of those . I completed these functionalities and delivered the final work to my mentor."
						result="I completed the project in about two weeks and was offered a full-time position early."
					/>
				),
			},
			{
				dotTitle: "04/2023 - 01/2025",
				content: (
					<StepContentFrame
						projectName="Knowledge Portal (04/2023 - 01/2025)"
						position={"Software developer"}
						summary={(
							<p>
								This project provides services for universities in Japan.<br/>
								At the beginning of this project, I was lucky to participate as an intern with four colleagues.<br/>
                We finished our internship and have been contracted by the client ever since.<br/>
							</p>
						)}
						projectTechnologyLogos={[
							ReactLogo,
							Yii2Logo,
							MySQLLogo,
							DockerLogo,
							AWSLogo,
						]}
						teamSize={10}
						role="I have effectively completed all the tasks assigned to me and received excellent feedback from my leader. The client acknowledged our contributions and has renewed the contract during our working relationship. Furthermore, the client has entrusted me with additional large-scale projects."
						issues="Single sign-on with SAML protocol using Keycloak IDP, Multiple-language using i18next and DeepL API, Content Management System with EditorJS, Optimizing the system's processing, Update version of library, Additional operations of the system,etc."
						result="I have effectively completed all the tasks assigned to me and received excellent feedback from my leader. The client acknowledged our contributions and has renewed the contract during our working relationship. Furthermore, the client has entrusted me with additional large-scale projects."
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
						summary="An IoT project centered around using a QR code scanner to control door access."
						projectTechnologyLogos={[PythonLogo]}
						teamSize={1}
						role="Develop the device's operations according to the client's design as outlined in Notion."
						result="I have completed the functionalities requested by the client."
					/>
				),
			},
		],
	},
];
