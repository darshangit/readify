import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBooth,
  faAmericanSignLanguageInterpreting,
  faUserCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Header = (props) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.img_style}
        src="readify_icon.jpg"
        title="Readify"
      />
      <div className={styles.account}>
        <FontAwesomeIcon icon={faUserCircle} size="2x" title="Account" />
      </div>
    </div>
  );
};

export default Header;
