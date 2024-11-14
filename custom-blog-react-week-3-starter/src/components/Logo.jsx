import { Link } from "react-router-dom";
import styles from "../styles/logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.wrapper}>
      Sparta Coding Club Blog
    </Link>
  );
}

export default Logo;
