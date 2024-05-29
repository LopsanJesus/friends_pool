import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";

import useGetView from "api/useGetView";

import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";

import useUser from "hooks/useUser";
import DatabaseError from "pages/ErrorPage";

import { UserType } from "types/types";

import styles from "styles/constants.module.scss";

const Login = () => {
  const { token } = useParams();

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

  if (loading) {
    return <MoonLoader color={styles.primaryColor} />;
  }

  if (error) {
    return <DatabaseError />;
  }

  return (
    <PageWithTopbar className="Login" title={`Bienvenido, ${userName}`}>
      <LinkButton linkTo="/" text="Acceder" />
    </PageWithTopbar>
  );
};

export default Login;
