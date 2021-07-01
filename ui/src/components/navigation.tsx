import { NavLink } from "react-router-dom";
import styles from "./navigation.module.scss";

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/" activeClassName={styles.selected}>Map</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName={styles.selected}>About</NavLink>
                </li>
            </ul>
        </nav>
    );
};
