import Image from "components/Image";
import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";
import Separator from "components/Separator";

import BookImage from "assets/book.png";
import WriteImage from "assets/write.png";

import useUser from "hooks/useUser";

import "./style.scss";

const Home = () => {
  const { userName } = useUser();

  return (
    <PageWithTopbar className="Home">
      {userName && <div className="user-section">Hola, {userName}</div>}

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

            <div>Realiza tus predicciones</div>

            <LinkButton
              linkTo="/predictions"
              text="Empezar"
              variant="primary"
            />
          </div>
        </>
      )}

      <Separator />

      <div className="banner-section">
        <Image size="small" src={BookImage} alt="Rules book icon" />

        <div>¿Aún no tienes claras las reglas?</div>

        <LinkButton
          linkTo="/rules"
          text="Consultar las reglas"
          variant="secondary"
        />
      </div>

      {userName && (
        <>
          <Separator />

          <LinkButton linkTo="/logout" text="Desconectar" variant="tertiary" />
        </>
      )}
    </PageWithTopbar>
  );
};

export default Home;
