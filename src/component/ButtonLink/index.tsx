import {AnchorHTMLAttributes, FC, ReactNode} from "react";
import classNames from "classnames";
import styles from "./buttonLink.module.scss";

type ButtonLinkProps = {
	children?: ReactNode;
	color?: "blue" | "green";
}

export const ButtonLink:FC<ButtonLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
	color,
	children,
	...rest
}) => {
	
	const getBackground = () => {
		switch (color) {
			case "blue":
				return "#0017c7";
			case "green":
				return "#009118";
			default:
				return "#0017c7";
		}
	};
	
	const getTextColor = () => {
		switch (color) {
			case "blue":
				return "#ffffff";
			case "green":
				return "#ffffff";
			default:
				return "#ffffff";
		}
	};
	
	return (
		<a
			className={classNames(styles["button-link"], rest.className)}
			style={{
				background: getBackground(),
				color: getTextColor(),
				...rest.style,
			}}
			{...rest}
		>
			{children}
		</a>
	)
}