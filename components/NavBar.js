import { useState, useContext } from "react";
import { ThemeContext } from "use-theme-switcher";
import Link from "next/link";
import { FaPalette, FaChevronLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemePicker from './ThemePicker';

const NavBar = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [showThemes, isShowThemes] = useState(false);

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

  return (
    <header className="nav nav__container">
      <nav className="nav__menu">
        <ThemeSelectModal show={showThemes} showHandler={isShowThemes} />
        <ul className="nav__links small">
          <li className="nav__link-item">
            <p>Skills</p>
          </li>
          <li className="nav__link-item">
            <p>Projects</p>
          </li>
          <li className="nav__link-item">
            <p>Contact</p>
          </li>
          <li className="nav__link-item">
            <button>Resume</button>
          </li>
          <li className="nav__link-item">
            <div className={`palette__theme-select ${showThemes ? 'active' : ''}`} onClick={() => isShowThemes(!showThemes)}>
              <FaPalette />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default NavBar;