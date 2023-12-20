import { useState } from "react";

import "./style.scss";

const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="TopBar">
      <header>
        <div className="menu-icon" onClick={() => toggleMenu()}>
          &#9776;
        </div>
        <img src="logo.png" alt="Logo" />
      </header>

      {showMenu && (
        <nav>
          <a href="/">INICIO</a>
          <a href="/matches">#Euro2024</a>
          <a href="/players">Participantes</a>
          <a href="/ranking">Clasificación</a>
        </nav>
      )}
    </div>
  );
};

export default TopBar;
