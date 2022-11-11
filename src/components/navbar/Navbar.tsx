import { useState } from "react";

import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState("/");

  const linkClickHandler = (event: any) => {
    setSelectedPage(event.target.attributes.href.value);
  };

  return (
    <nav className={styles.navbar}>
      <Link
        to={"/"}
        className={`${styles["navbar-item"]} ${
          selectedPage === "/" && styles.selected
        }`}
        onClick={linkClickHandler}
      >
        Home
      </Link>
      <Link
        to={"/settings"}
        className={`${styles["navbar-item"]} ${
          selectedPage === "/settings" && styles.selected
        }`}
        onClick={linkClickHandler}
      >
        Settings
      </Link>
    </nav>
  );
};

export default Navbar;
