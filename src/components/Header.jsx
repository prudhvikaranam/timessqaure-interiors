import logo from "../assets/images/logo.png";
import { navData } from "../assets/data/data";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburgerMenu, setshowHamburgerMenu] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
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

  useEffect(() => {

    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !hamburgerRef.current.contains(e.target)) {
        setshowHamburgerMenu(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    let lastScrollY = window.scrollY;

    const alterClassesOnScroll = () => {
      const navbar = document.getElementById("navbar");
      const totalNavItems = document.getElementById("totalNav-items");

      if (window.scrollY > lastScrollY) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      if (pathname !== "/weWork" && !pathname.includes("/ideas") && !pathname.includes('/projects') && !pathname.startsWith("/themes")) {
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

    window.addEventListener("scroll", alterClassesOnScroll);
    const totalNavItems = document.getElementById("totalNav-items");

    const navbar = document.getElementById("navbar");
    if (pathname === "/weWork" || pathname.startsWith("/ideas/") || pathname.startsWith("/projects") || pathname.startsWith("/themes")) {
      navbar.classList.add("dark-bg");
      totalNavItems.classList.add("dark-bg-menu-items");
    } else {
      navbar.classList.remove("dark-bg");
      totalNavItems.classList.remove("dark-bg-menu-items");
    }


    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", alterClassesOnScroll);
      document.removeEventListener("click", handleClick);
    };
  }, [pathname]);

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
                  <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
                  Sample@test.com
                </a>
                <a
                  className="prim-color fw-100 contact-link"
                  href="tel:+91 9849446023"
                >
                  <i class="fa fa-phone-square" aria-hidden="true"></i>&nbsp;
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
              ref={hamburgerRef}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>

        {showHamburgerMenu && (
          <div className="mobile-menu-items" id="mobile-menu-items" ref={menuRef}>
            <p className="mobile-contact-detail font-prim">
              <a href="mailto:Sample@test.com" className="prim-color">
                <i class="fa fa-phone-square" aria-hidden="true"></i>&nbsp;EMAIL US
              </a>

              <a
                className="prim-color fw-100 contact-link"
                href="tel:+91 9849446023"
              >
                <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;CALL US
              </a>
            </p>
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



// Transforming spaces, enriching lives—where every detail speaks your style.


// "Design is not just what it looks like, it's how it feels."
// – Inspired by Steve Jobs, this quote highlights the emotional impact of design.

// "Where beauty meets functionality, your perfect space is born."
// – A balance between aesthetics and practicality.

// "Every home tells a story—let us help you write yours."
// – Emphasizes personal style and storytelling through design.

// "Spaces crafted with care, designed for life."
// – A warm, inviting message that highlights attention to detail and usability.

// "Creating rooms that reflect your essence, and elevate your every day."
// – This one speaks to the deep personalization that good interior design brings.

// "Elegance is not about being noticed, it’s about being remembered."
// – A subtle, refined message for those seeking timeless, memorable interiors.

// "A well-designed space is a reflection of the soul."
// – Emphasizes how design mirrors one's personality and spirit.