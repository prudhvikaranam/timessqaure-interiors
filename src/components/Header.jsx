import logo from "../assets/images/logo.png";
import { navData } from "../assets/data/data";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import mail from "../assets/images/mail.png";
import call from "../assets/images/call.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburgerMenu, setshowHamburgerMenu] = useState(false);
  let lastScrollY = window.scrollY;

  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setshowHamburgerMenu(!isMenuOpen);
  };

  const goToSection = (menuItem, device) => {
    // if (document.getElementById(menuItem)) {
    //   const element = document.getElementById(menuItem);
    //   window.scrollTo({
    //     top: element.offsetTop - 100,
    //     behavior: "smooth"
    //   });

    if (device === "mobile") {
      setIsMenuOpen(!isMenuOpen);
      setshowHamburgerMenu(!isMenuOpen);
    }
    // }
  };

  const alterClassesOnScroll = () => {
    // console.log('Prudhvi !pathname.startsWith("/ideas/")', !pathname.startsWith("/ideas/"));
    
    if (pathname !== "/weWork") {
      const navbar = document.getElementById("navbar");
      const totalNavItems = document.getElementById("totalNav-items");

      if (window.scrollY > lastScrollY) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      if (window.scrollY > 110) {
        navbar.classList.add("dark-bg");
        totalNavItems.classList.add("dark-bg-menu-items");
      } else {
        navbar.classList.remove("dark-bg");
        totalNavItems.classList.remove("dark-bg-menu-items");
      }
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", alterClassesOnScroll);
    const totalNavItems = document.getElementById("totalNav-items");

    const navbar = document.getElementById("navbar");
    if (pathname === "/weWork" || pathname.startsWith("/ideas/")) {
      navbar.classList.add("dark-bg");
      totalNavItems.classList.add("dark-bg-menu-items");
    } else {
      navbar.classList.remove("dark-bg");
      totalNavItems.classList.remove("dark-bg-menu-items");

    }

    return () => {
      window.removeEventListener("scroll", alterClassesOnScroll);
    };
  }, [pathname,alterClassesOnScroll]);

  return (
    <>
      <div className="main-header-container" id="navbar">
        <div className="header-widget-container" id="header-widget-container">
          <div className="menu-container pd-lr-40" id="menu-container">
            <img
              src={logo}
              alt="timesSqaure-logo"
              className="menu-logo"
              id="menu-logo"
            />

            <div className="navbar-left desktop">
              <div className="menu-contact-details">
                <a href="mailto:Sample@test.com" className="contact-link">
                  <img src={mail} alt="mail" />
                  Sample@test.com
                </a>
                <a
                  className="prim-color fw-100 contact-link"
                  href="tel:+91 9849446023"
                >
                  <img src={call} alt="call" />
                  +91 9849446023
                </a>
              </div>

              <div className="menuitems-container">
                <div
                  className="menu-items desktop font-size-14"
                  id="totalNav-items"
                >
                  {navData.header.navlist.map((data) => {
                    if (data.children) {
                      return (
                        <div className="sub-menu-items">
                          <p>
                            <Link to={`/`}>{data.name}</Link>
                          </p>
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
                          <Link to={`/${data.id}`}>{data.name}</Link>
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </div>

            <div
              className={`hamburger-container ${isMenuOpen && "mobileView"}`}
              onClick={toggleMenu}
              id="hamburger-container"
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>

        {showHamburgerMenu && (
          <div className="mobile-menu-items" id="mobile-menu-items">
            {navData.header.navlist.map((data) => {
              if (data.children) {
                return (
                  <div className="sub-menu-items mobile">
                    <p>{data.name}</p>

                    <div className="sub-menu mobile">
                      {data.children.map((childmenus, j) => {
                        return (
                          <p>
                            <Link
                              to={`./ideas/${childmenus.id}`}
                              onClick={toggleMenu}
                            >
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
                  <p
                    onClick={() => {
                      goToSection(data.id, "mobile");
                    }}
                  >
                    <Link to={`/${data.id}`}>{data.name}</Link>
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
