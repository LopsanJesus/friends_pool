import { useTranslation } from "react-i18next";

import LanguageSwitcher from "components/LanguageSwitcher";
import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";

import useUser from "hooks/useUser";

const Profile = () => {
  const { userName } = useUser();

  const { t } = useTranslation();

  return (
    <PageWithTopbar
      className="Profile"
      title={t("profile.title", {
        userName,
      })}
    >
      <LanguageSwitcher />

      <LinkButton
        linkTo="/logout"
        text={t("home.disconnect")}
        variant="tertiary"
      />
    </PageWithTopbar>
  );
};

export default Profile;
