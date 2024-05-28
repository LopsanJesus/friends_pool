import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import LogoImage from "assets/logo.png";
import Image from "components/Image";

import "./style.scss";

const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(location.pathname);

  const navLinks = [
    { name: "Partidos", link: "/matches" },
    { name: "Participantes", link: "/players" },
    { name: "Clasificación", link: "/ranking" },
  ];

  return (
    <div className="TopBar">
      <header>
        <div className="menu-icon" onClick={() => toggleMenu()}>
          &#9776;
        </div>
        <a href="/">
          <Image src={LogoImage} alt="Logo" size="large" />
        </a>
      </header>

      {showMenu && (
        <nav>
          {navLinks.map((link) => (
            <NavLink
              key={link.link}
              to={link.link}
              className={location.pathname === link.link ? "active" : ""}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};

export default TopBar;
