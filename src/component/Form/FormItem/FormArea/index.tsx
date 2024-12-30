import {ChangeEvent, FC, TextareaHTMLAttributes, useContext} from "react";
import {FormContext} from "../../FormContext";
import styles from "./formArea.module.scss";

type FormAreaProps = {
	label: string;
}

export const FormArea:FC<FormAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
 label,
 ...rest
}) => {
	const { setFieldValue } = useContext(FormContext);
	
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (rest.name) {
			setFieldValue(rest.name, event.target.value);
		}
	}
	
	return (
		<div className={styles["form-text-area"]}>
			<label>{label}</label><br/>
			<textarea onChange={handleChange} {...rest}/>
		</div>
	)
}