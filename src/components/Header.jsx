import logo from "../assets/images/logo.png";
import { navData } from "../assets/data/data";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburgerMenu, setshowHamburgerMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setshowHamburgerMenu(!isMenuOpen);
  };

  const goToSection = (menuItem, device) => {
    if (document.getElementById(menuItem)) {
      const element = document.getElementById(menuItem);
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });

      if (device === "mobile") {
        setIsMenuOpen(!isMenuOpen);
        setshowHamburgerMenu(!isMenuOpen);
      }
    }
  };

  return (
    <>
      <div className="main-header-container">
        <div className="header-widget-container" id="header-widget-container">
          <div className="menu-container pd-lr-40" id="menu-container">
            <img
              src={logo}
              alt="timesSqaure-logo"
              className="menu-logo"
              id="menu-logo"
            />
            <div className="menu-items desktop" id="menu-items desktop">
              {navData.header.navlist.map((data) => {
                if (data.children) {
                  return (
                    <div className="sub-menu-items">
                      <p>{data.name}</p>

                      <div className="sub-menu">
                        {data.children.map((childmenus, j) => {
                          return (
                            <p>
                              <Link to={`./ideas/${childmenus.id}`}>
                                {childmenus.name}
                              </Link>
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <p onClick={() => goToSection(data.id, "desktop")}>
                      <Link to={`/`}>{data.name}</Link>
                    </p>
                  );
                }
              })}
            </div>

            <div
              className={`hamburger-container ${isMenuOpen && "mobileView"}`}
              onClick={toggleMenu}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>

        {showHamburgerMenu && (
          <div className="mobile-menu-items">
            {navData.header.navlist.map((data) => {
              if (data.children) {
                return (
                  <div className="sub-menu-items mobile">
                    <p>{data.name}</p>

                    <div className="sub-menu mobile">
                      {data.children.map((childmenus, j) => {
                        return <p>{childmenus.name}</p>;
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <p
                    onClick={() => {
                      goToSection(data.id, "mobile");
                    }}
                  >
                    <Link to={`/`}>{data.name}</Link>
                  </p>
                );
              }
            })}
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};
