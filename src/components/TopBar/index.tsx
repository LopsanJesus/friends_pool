import { useState } from "react";

import "./style.scss";

interface IProps {
  size: "large" | "small";
}

const TopBar = ({ size }: IProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="TopBar">
      {size === "large" && (
        <header>
          <div className="menu-icon" onClick={() => toggleMenu()}>
            &#9776;
          </div>
          <img src="logo.png" alt="Logo" />
        </header>
      )}

      {size === "small" && (
        <header>
          <div className="menu-icon" onClick={() => toggleMenu()}>
            &#9776;
          </div>
          <img src="logo.png" alt="Logo" />
        </header>
      )}

      {showMenu && (
        <nav>
          <a href="/">INICIO</a>
          <a href="/rules">#Euro2024</a>
          <a href="/papas">Papas</a>
          <a href="/">Clasificación</a>
        </nav>
      )}
    </div>
  );
};

export default TopBar;
