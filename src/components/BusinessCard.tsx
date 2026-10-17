import { useTranslation } from "react-i18next";
import qr from "@/assets/qr.svg";
import person from "@/data/person.json";

function BusinessCard() {
  const { t } = useTranslation();

  return (
    <article className="max-w-140 gap-4 bg-white p-4 text-black flex aspect-7/4 w-full flex-row items-center">
      <img src={qr} alt={t("card.qrAlt")} className="size-32 shrink-0" />
      <div className="min-w-0 flex-1">
        <header>
          <h1>{t("card.name")}</h1>
          <p>{t("card.jobTitle")}</p>
        </header>
        <address className="not-italic">
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </address>
      </div>
    </article>
  );
}

export default BusinessCard;
