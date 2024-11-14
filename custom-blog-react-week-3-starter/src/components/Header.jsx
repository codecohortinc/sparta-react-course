import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import styles from "../styles/header.module.css";
import Logo from "./Logo";

function Header() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <header className={styles.wrapper}>
      <Logo />
      <div className={styles.actions}>
        <button className={styles.action}>
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
        </button>
      </div>
    </header>
  );
}

export default Header;
