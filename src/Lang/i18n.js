import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ar from "./ar.json";
import tr from "./tr.json";
import fr from "./fr.json";
import es from "./es.json";
import de from "./de.json";
import pt from "./pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    tr: { translation: tr },
    fr: { translation: fr },
    es: { translation: es },
    de: { translation: de },
    pt: { translation: pt },
  },

  lng: "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
