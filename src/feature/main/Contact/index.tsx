import {SectionWrapper} from "../SectionWrapper";
import React, {FC} from "react";
import Form from "component/Form";
import {FormArea, FormInput, FormSubmit} from "component/Form/FormItem";
import styles from "./contact.module.scss";

export const Contact: FC = () => {
	const handleSubmit = (fieldValues: Record<string, any>) => {
		console.log(fieldValues);
	}
	
	return (
		<SectionWrapper sectionId={"contact"} title={"Contact"}>
			<div className={styles["form-wrapper"]}>
				<Form handleSubmit={handleSubmit}>
					<FormInput label={"Name"} name={"title"} placeholder={"Please enter your name"}/>
					<FormInput label={"Email Address"} name={"email"} placeholder={"example@example.com"}/>
					<FormInput label={"Subject"} name={"subject"} placeholder={"Please enter your subject"}/>
					<FormArea label={"Message"} name={"message"} placeholder={"Please enter your message"}/>
					<FormSubmit> SEND FEEDBACK </FormSubmit>
				</Form>
			</div>
		</SectionWrapper>
	)
}