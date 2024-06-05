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
            {userData?.orientation} {userData?.randomFact}
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
