import logo from "../assets/images/logo.png";
import { navData } from "../assets/data/data";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburgerMenu, setshowHamburgerMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setshowHamburgerMenu(!isMenuOpen);
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
                      <a>{data.name}</a>

                      <div className="sub-menu">
                        {data.children.map((childmenus, j) => {
                          return <a>{childmenus}</a>;
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return <a>{data.name}</a>;
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
                    <a>{data.name}</a>

                    <div className="sub-menu mobile">
                      {data.children.map((childmenus, j) => {
                        return <a>{childmenus}</a>;
                      })}
                    </div>
                  </div>
                );
              } else {
                return <a>{data.name}</a>;
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};
