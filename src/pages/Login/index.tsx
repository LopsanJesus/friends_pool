import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import useGetView from "api/useGetView";

import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";

import useUser from "hooks/useUser";
import DatabaseError from "pages/ErrorPage";

import { UserType } from "types/types";

import Loader from "components/Loader";

const Login = () => {
  const { token } = useParams();
  const { t } = useTranslation();

  const { setUserId, userName, setUserPk, setUserName } = useUser();

  const { data, loading, error } = useGetView({
    databaseName: "Users",
    filterByFormula: `token = "${token}"`,
  });

  useEffect(() => {
    if (data && data?.length > 0) {
      const user = data[0] as UserType;

      setUserId(user.id);
      setUserPk(user.pk);
      setUserName(user.name ?? "");
    }
  }, [data, setUserId, setUserName, setUserPk]);

  if (error) {
    return <DatabaseError />;
  }

  return (
    <PageWithTopbar className="Login" title={t("welcome", { userName })}>
      {loading && <Loader />}
      {!loading && data && <LinkButton linkTo="/" text={t("buttons.access")} />}
    </PageWithTopbar>
  );
};

export default Login;
