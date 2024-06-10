import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import useGetView from "api/useGetView";

import LanguageSwitcher from "components/LanguageSwitcher";
import LinkButton from "components/LinkButton";
import Loader from "components/Loader";
import PageWithTopbar from "components/PageWithTopbar";
import Separator from "components/Separator";
import useUser from "hooks/useUser";
import { UserInfoType } from "types/types";

import "./style.scss";

const Profile = () => {
  const [userData, setUserData] = useState<UserInfoType>();

  const { userPk, userName } = useUser();

  const { t } = useTranslation();

  const { data, loading, error } = useGetView({
    databaseName: "UserInfos",
    filterByFormula: `User = "${userPk}"`,
  });

  useEffect(() => {
    if (data) {
      setUserData(data[0] as UserInfoType);
    }
  }, [data]);

  if (error) {
    return <Navigate to="/error" replace />;
  }

  return (
    <PageWithTopbar
      className="Profile"
      title={t("profile.title", { userName })}
    >
      {loading && <Loader />}
      {!loading && data && (
        <>
          <div className="user-info">
            <div className="infoType">Apuesta</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.bet}</div>

            <div className="infoType">Orientación</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.orientation}</div>

            <div className="infoType">Religión</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.religion}</div>

            <div className="infoType">Dinero en la cuenta</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.moneyInBank}</div>

            <div className="infoType">Jugador favorito de Africa</div>
            <div className="dash">-</div>
            <div className="infoValue">{userData?.favoriteAfricaPlayer}</div>
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
        </>
      )}
    </PageWithTopbar>
  );
};

export default Profile;
