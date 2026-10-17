import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const modules = import.meta.glob<{ default: object }>("./data/locales/*.json", {
  eager: true,
});

const resources = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.match(/\/(\w+)\.json$/)![1],
    { translation: mod.default },
  ]),
);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    supportedLngs: Object.keys(resources),
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
