import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./locale/en.json";
import VI from "./locale/vi.json";

const resources = {
	en: {translation: EN},
	vi: {translation: VI},
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false, // không cần thiết cho React
		},
	});

export default i18n;