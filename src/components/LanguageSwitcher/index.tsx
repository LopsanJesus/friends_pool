import { useTranslation } from "react-i18next";

import "./style.scss";

const lngs: { [key: string]: { countryCode: string } } = {
  en: { countryCode: "gb" },
  es: { countryCode: "es" },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="LanguageSwitcher">
      {Object.keys(lngs).map((lng) => (
        <img
          src={`https://flagcdn.com/w40/${lngs[lng].countryCode}.png`}
          alt={lng}
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          className={i18n.language === lng ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default LanguageSwitcher;
