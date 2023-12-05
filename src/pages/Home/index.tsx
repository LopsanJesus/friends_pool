import TopBar from "../../components/TopBar";

import BookImage from "../../assets/book.png";

import Image from "../../components/Image";
import Separator from "../../components/Separator";
import Button from "../../components/Button";

import "./style.scss";

const Home = () => {
  return (
    <div className="Home">
      <TopBar size="large" />

      <div className="container">
        <Image
          size="large"
          src="https://www.fifplay.com/img/public/euro-2024-logo.png"
          alt="Euro 2024"
        />

        <Separator />

        <div className="rules">
          <Image size="small" src={BookImage} alt="Rules book icon" />
          <div>¿Aún no tienes claras las reglas?</div>
          <Button
            linkTo="/rules"
            text="Consultar las reglas"
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
