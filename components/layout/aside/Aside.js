import styles from "./Aside.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
const Aside = (props) => {
  const router = useRouter();
  return (
    <div className={styles.aside_left}>
      <h3 className={styles.header}>Menu</h3>
      <div className={` ${router.asPath === "/discover" && styles.active}`}>
        <Link href="/discover">
          <div>
            <FontAwesomeIcon icon={faAnchor} title={"Discover"} />
            <span>Discover</span>
          </div>
        </Link>
      </div>
      <div className={` ${router.asPath === "/search" && styles.active}`}>
        <Link className="link1" href="/search">
          <div>
            <FontAwesomeIcon icon={faSearch} title={"Discover"} />
            <span>Search</span>
          </div>
        </Link>
      </div>
      <div className={` ${router.asPath === "/my-library" && styles.active}`}>
        <Link className="link1" href="/my-library">
          <div>
            <FontAwesomeIcon icon={faBook} title={"My Library"} />
            <span>My Library</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Aside;
