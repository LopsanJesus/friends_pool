import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";

import useUser from "hooks/useUser";
import useUserStorage from "hooks/useUserStorage";

const Logout = () => {
  const { t } = useTranslation();

  const { setUserId, setUserPk, setUserName } = useUser();

  const { deleteIdFromStorage, deletePkFromStorage, deleteNameFromStorage } =
    useUserStorage();

  useEffect(() => {
    deleteIdFromStorage();
    deletePkFromStorage();
    deleteNameFromStorage();

    setUserId(undefined);
    setUserPk(undefined);
    setUserName(undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWithTopbar className="Logout" title={t("logout.title")}>
      <LinkButton linkTo="/" text={t("buttons.home")} />
    </PageWithTopbar>
  );
};

export default Logout;
