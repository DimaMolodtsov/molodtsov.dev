import { useTranslation } from "react-i18next";
import { US, UA, RU } from "country-flag-icons/react/3x2";

const languages = [
  { code: "en", label: "English", Flag: US },
  { code: "uk", label: "Українська", Flag: UA },
  { code: "ru", label: "Русский", Flag: RU },
];

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <div role="group" aria-label={t("header.language")} className="gap-3 flex">
      {languages.map(({ code, label, Flag }) => {
        const active = i18n.resolvedLanguage === code;

        return (
          <button
            key={code}
            type="button"
            lang={code}
            title={label}
            aria-label={label}
            aria-pressed={active}
            onClick={() => i18n.changeLanguage(code)}
            className={
              active
                ? "w-8 rounded-sm ring-white ring-offset-black cursor-pointer opacity-100 ring-2 ring-offset-2"
                : "w-8 rounded-sm cursor-pointer opacity-50 transition hover:opacity-100"
            }
          >
            <Flag className="rounded-sm block w-full" />
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
