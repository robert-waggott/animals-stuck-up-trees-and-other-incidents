import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import styles from "./navigation.module.scss";

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="selected">Map</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="selected">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};
