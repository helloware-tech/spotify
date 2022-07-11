import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import globalEs from './translations/es/global.json';
import globalEn from './translations/en/global.json';

i18n
	.use(initReactI18next)
	.init({
		interpolation: {
			escape: false,
		},
		lng: process.env.REACT_APP_LOCALE || 'es',
		fallbackLng: process.env.REACT_APP_LOCALE || 'es',
		defaultNS: 'global',
		resources: {
			es: {
				global: globalEs,
			},
			en: {
				global: globalEn,
			},
		},
	});

export default i18n;
