/* eslint-disable react/prop-types */
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import PATHROUTES from "../../helpers/PathRoutes.helper";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className={styles.navbar}>
      <Link to={PATHROUTES.HOME} className={styles.navlink}>Home</Link>
      <Link to={PATHROUTES.ABOUT} className={styles.navlink}>About</Link>
      <Link to={PATHROUTES.FAVORITES} className={styles.navlink}>Favorites</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
