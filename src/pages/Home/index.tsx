import { useTranslation } from "react-i18next";

import Image from "components/Image";
import LanguageSwitcher from "components/LanguageSwitcher";
import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";
import Separator from "components/Separator";

import BookImage from "assets/book.png";
import WriteImage from "assets/write.png";

import useUser from "hooks/useUser";

import "./style.scss";

const Home = () => {
  const { userName } = useUser();
  const { t } = useTranslation();

  return (
    <PageWithTopbar className="Home">
      {userName && (
        <div className="user-section">{t("hello", { userName })}</div>
      )}

      <Image
        size="large"
        src="https://www.fifplay.com/img/public/euro-2024-logo.png"
        alt="Euro 2024"
      />

      {userName && (
        <>
          <Separator />

          <div className="banner-section">
            <Image size="small" src={WriteImage} alt="Writing icon" />

            <div>{t("home.predictions")}</div>

            <LinkButton
              linkTo="/predictions"
              text={t("home.start")}
              variant="primary"
            />
          </div>
        </>
      )}

      <Separator />

      <div className="banner-section">
        <Image size="small" src={BookImage} alt="Rules book icon" />

        <div>{t("home.rules")}</div>

        <LinkButton
          linkTo="/rules"
          text={t("home.rulesButton")}
          variant="secondary"
        />
      </div>

      <Separator />

      <LanguageSwitcher />

      {userName && (
        <LinkButton
          linkTo="/logout"
          text={t("home.disconnect")}
          variant="tertiary"
        />
      )}
    </PageWithTopbar>
  );
};

export default Home;
