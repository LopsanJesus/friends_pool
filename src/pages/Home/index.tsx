import Image from "components/Image";
import LinkButton from "components/LinkButton";
import Separator from "components/Separator";
import { useUser } from "contexts/UserContext";

import BookImage from "assets/book.png";
import WriteImage from "assets/write.png";

import PageWithTopbar from "components/PageWithTopbar";

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

      <Separator />

      <div className="banner-section">
        <Image size="small" src={WriteImage} alt="Writing icon" />

        <div>Realiza tus predicciones</div>

        <LinkButton linkTo="/predictions" text="Empezar" variant="primary" />
      </div>

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
    </PageWithTopbar>
  );
};

export default Home;
