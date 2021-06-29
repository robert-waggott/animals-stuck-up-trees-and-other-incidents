import React from "react";
import styles from "./search-form.module.scss";
import { FaSearch } from "react-icons/fa";

export interface SearchFormProps {
    onSearchTermEntered: (term: string) => unknown;
}

export const SearchForm = (props: SearchFormProps) => {
    return (
        <>
            <div className={styles.searchForm}>
                <input type="text" placeholder="Search term" />  
                <button type="button">
                    <FaSearch />
                </button>                 
            </div>
        </>
    );
};
