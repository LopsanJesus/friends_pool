import { useEffect } from "react";

import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";

import useUser from "hooks/useUser";
import useUserStorage from "hooks/useUserStorage";

const Logout = () => {
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
    <PageWithTopbar className="Logout" title={`Sesión cerrada`}>
      <LinkButton linkTo="/" text="Inicio" />
    </PageWithTopbar>
  );
};

export default Logout;
