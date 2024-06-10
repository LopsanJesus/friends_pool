import { useTranslation } from "react-i18next";

import Image from "components/Image";
import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";
import Separator from "components/Separator";

import BookIcon from "assets/book.png";
import EuroImage from "assets/euro-2024-logo.png";
import WriteIcon from "assets/write.png";

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

      <Image size="large" src={EuroImage} alt="Euro 2024" />

      {userName && (
        <>
          <Separator />

          <div className="banner-section">
            <Image size="small" src={WriteIcon} alt="Writing icon" />

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
        <Image size="small" src={BookIcon} alt="Rules book icon" />

        <div>{t("home.rules")}</div>

        <LinkButton
          linkTo="/rules"
          text={t("home.rulesButton")}
          variant="secondary"
        />
      </div>
    </PageWithTopbar>
  );
};

export default Home;
