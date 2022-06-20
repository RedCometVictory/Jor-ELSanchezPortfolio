import { useState, useContext } from "react";
import { ThemeContext } from "use-theme-switcher";
import Link from "next/link";
import { FaPalette, FaChevronLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemePicker from './ThemePicker';
import SpringIn from "./animations/SpringIn";
import SpringInMenu from "./animations/SpringInMenu";

const NavBar = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [slideMenu, showSlideMenu] = useState(false);
  const [showThemes, isShowThemes] = useState(false);

  const slideMenuHandler = () => {
    console.log("handler active")
    showSlideMenu(!slideMenu)
  };

  const ThemeSelectModal = ({show, showHandler}) => {
    let activeClass = show ? 'active' : '';
    return (
      <section className={`palette ${activeClass}`}>
        <ThemePicker
          theme={theme}
          setTheme={switchTheme}
        />
      </section>
    );
  };
  
  let activeSlide = slideMenu ? 'active' : '';
  return (
    <header className="nav nav__container">
      <SpringInMenu isVisible={slideMenu}>
        <nav className="nav__slide-menu">
          <ul className="nav__slide-links slide">
            <li className="nav__slide-link-item">
              <p>Skills</p>
            </li>
            <li className="nav__slide-link-item">
              <p>Projects</p>
            </li>
            <li className="nav__slide-link-item">
              <p>Contact</p>
            </li>
          </ul>
        </nav>
      </SpringInMenu>
      <nav className="nav__menu">
        <SpringIn isVisible={showThemes}>
          <ThemeSelectModal show={showThemes} showHandler={isShowThemes} />
        </SpringIn>
        <ul className="nav__links small">
          <div
            className={`nav__menu-toggle ${slideMenu ? "active" : ""}`}
            onClick={() => slideMenuHandler()}
          >
            <GiHamburgerMenu />
          </div>
          <li className="nav__link-item horizontal">
            <p>Skills</p>
          </li>
          <li className="nav__link-item horizontal">
            <p>Projects</p>
          </li>
          <li className="nav__link-item horizontal">
            <p>Contact</p>
          </li>
          <li className="nav__link-item">
            <button>Resume</button>
          </li>
          <li className="nav__link-item">
            <div
              className={`palette__theme-select`}
              onClick={() => isShowThemes(!showThemes)}
            >
              <FaPalette />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default NavBar;