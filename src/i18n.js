import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import tr from "./locales/tr.json";
// import ar from "./locales/ar.json";
// import fr from "./locales/fr.json";
// import es from "./locales/es.json";
// import de from "./locales/de.json";
// import pt from "./locales/pt.json";
// import it from "./locales/it.json";
// import ja from "./locales/ja.json";
// import ko from "./locales/ko.json";
// import zh from "./locales/zh.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
    // ar: { translation: ar },
    // fr: { translation: fr },
    // es: { translation: es },
    // de: { translation: de },
    // pt: { translation: pt },
    // it: { translation: it },
    // ja: { translation: ja },
    // ko: { translation: ko },
    // zh: { translation: zh },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
