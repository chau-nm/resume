import {FC, FormEvent, FormHTMLAttributes, PropsWithChildren, useState} from "react";
import classNames from "classnames";
import styles from "./form.module.scss";
import {FormContext} from "./FormContext";

type FormProps = {
	handleSubmit?: (fieldValues: Record<string, any>) => void;
}

const Form:FC<FormProps & PropsWithChildren & FormHTMLAttributes<HTMLFormElement>> = ({
	handleSubmit,
	children,
	...rest
}) => {
	const [fieldValues, setNewFieldValues] = useState<Record<string, any>>({});
	
	const setFieldValue = (name: string, value: any) => {
		setNewFieldValues({...fieldValues, [name]: value});
	}
	
	const setFieldValues = (newFieldValues: Record<string, any>) => {
		setNewFieldValues({
			...fieldValues,
			newFieldValues
		});
	}
	
	const submit = (e: FormEvent) => {
		e.preventDefault();
		handleSubmit?.(fieldValues);
	}
	
	return (
		<FormContext.Provider value={{
			fieldValues,
			setFieldValues,
			setFieldValue
		}}>
			<form
				{...rest}
				className={classNames(styles.form, rest.className)}
				onSubmit={submit}
			>
				{children}
			</form>
		</FormContext.Provider>
	)
}

export default Form;