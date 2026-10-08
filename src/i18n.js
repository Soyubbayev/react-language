import i18n from "i18next";
import engTranslation from "./locales/eng.json";
import rusTranslation from "./locales/ru.json";
import uzTranslation from "./locales/uz.json";
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    eng: { translation: engTranslation },
    ru: { translation: rusTranslation },
    uz: { translation: uzTranslation },
  },
  
  lng: "eng",
  fallbackLng: "uz",
});
export default i18n;