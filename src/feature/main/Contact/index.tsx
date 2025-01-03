import {SectionWrapper} from "../SectionWrapper";
import React, {FC} from "react";
import Form from "component/Form";
import {FormArea, FormInput, FormSubmit} from "component/Form/FormItem";
import styles from "./contact.module.scss";
import emailjs from '@emailjs/browser';
import mailConfig from "mail/config.json";
import {isEmail} from "common/util";
import {useTranslation} from "react-i18next";

const Contact: FC = () => {
	const {t} = useTranslation();
	
	const handleSubmit = (fieldValues: Record<string, any>) => {
		if (!isValid(fieldValues)) {
			return;
		}
		sendMailFeedback(fieldValues);
	}
	
	const isValid = (fieldValues: Record<string, any>) => {
		const defaultField = {
			name: "Name",
			email: "Email",
			subject: "Subject",
			message: "Message"
		};
		
		for (let [key, value] of Object.entries(defaultField)) {
			if (!fieldValues[key]) {
				console.log(`${value} is required`);
				return false;
			}
			if (key === "email" && !isEmail(fieldValues[key])) {
				console.log("Email is not valid");
				return false;
			}
		}
		return true;
	}
	
	const sendMailThankyou = (fieldValues: Record<string, any>) => {
		const mailForm = {
			toName: fieldValues["name"],
			toEmail: fieldValues["email"],
		}
		
		emailjs
			.send(mailConfig.mailService, mailConfig.mailThankYouTemplate, mailForm, {
				publicKey: mailConfig.publicKey,
			})
			.then(
				() => {
					console.log('SUCCESS!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				},
			);
	}
	
	const sendMailFeedback = (fieldValues: Record<string, any>) => {
		const mailForm = {
			fromName: fieldValues["name"],
			replyTo: fieldValues["email"],
			subject: fieldValues["subject"],
			message: fieldValues["message"],
		}
		
		emailjs
			.send(mailConfig.mailService, mailConfig.mailFeedbackTemplate, mailForm, {
				publicKey: mailConfig.publicKey,
			})
			.then(
				() => {
					console.log('SUCCESS!');
					sendMailThankyou(fieldValues);
				},
				(error) => {
					console.log('FAILED...', error.text);
				},
			);
	}
	
	return (
		<SectionWrapper sectionId={"contact"} title={t("contact.title")}>
			<div className={styles["form-wrapper"]}>
				<Form handleSubmit={handleSubmit}>
					<FormInput label={t("contact.field.name.label")} name={"name"} placeholder={t("contact.field.name.placehoder")}/>
					<FormInput label={t("contact.field.email.label")} name={"email"} placeholder={"example@example.com"}/>
					<FormInput label={t("contact.field.subject.label")} name={"subject"} placeholder={t("contact.field.subject.placehoder")}/>
					<FormArea label={t("contact.field.message.label")} name={"message"} placeholder={t("contact.field.message.placehoder")}/>
					<FormSubmit> {t("contact.sendFeedback")} </FormSubmit>
				</Form>
			</div>
		</SectionWrapper>
	)
}

export default Contact;