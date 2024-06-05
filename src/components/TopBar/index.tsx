import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

import Image from "components/Image";
import useUser from "hooks/useUser";

import LogoImage from "assets/logo.png";

import "./style.scss";

const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const { t } = useTranslation();

  const { userName } = useUser();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinks = [
    { name: t("topbar.profile"), link: "/profile", protected: true },
    { name: t("topbar.predictions"), link: "/predictions", protected: true },
    { name: t("topbar.matches"), link: "/matches", protected: false },
    { name: t("topbar.players"), link: "/players", protected: false },
    { name: t("topbar.rankings"), link: "/ranking", protected: false },
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
          {navLinks.map(
            (link) =>
              (!link.protected || (link.protected && userName)) && (
                <NavLink
                  key={link.link}
                  to={link.link}
                  className={location.pathname === link.link ? "active" : ""}
                >
                  {link.name}
                </NavLink>
              )
          )}
        </nav>
      )}
    </div>
  );
};

export default TopBar;
