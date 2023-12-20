import TopBar from "../../components/TopBar";

import WriteImage from "../../assets/write.png";
import BookImage from "../../assets/book.png";

import Image from "../../components/Image";
import Separator from "../../components/Separator";
import Button from "../../components/Button";

import "./style.scss";

const Home = () => {
  return (
    <div className="Home">
      <TopBar />

      <div className="container">
        <Image
          size="large"
          src="https://www.fifplay.com/img/public/euro-2024-logo.png"
          alt="Euro 2024"
        />

        <Separator />

        <div className="banner-section">
          <Image size="small" src={WriteImage} alt="Writing icon" />
          <div>Realiza tus predicciones</div>
          <Button linkTo="/predictions" text="Vamo a juga" variant="primary" />
        </div>

        <Separator />

        <div className="banner-section">
          <Image size="small" src={BookImage} alt="Rules book icon" />
          <div>¿Aún no tienes claras las reglas?</div>
          <Button
            linkTo="/rules"
            text="Consultar las reglas"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
