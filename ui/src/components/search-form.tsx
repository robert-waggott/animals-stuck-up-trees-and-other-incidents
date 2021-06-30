import React from "react";
import styles from "./search-form.module.scss";
import { FaSearch } from "react-icons/fa";

export interface SearchFormProps {
    onSearchTermEntered: (term: string) => unknown;
}

export const SearchForm = (props: SearchFormProps) => {
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    
    return (
        <>
            <div className={styles.searchForm}>
                <input type="text" placeholder="Search term" value={searchTerm} />  
                <button type="button" onClick={() => props.onSearchTermEntered(searchTerm)}>
                    <FaSearch />
                </button>                 
            </div>
        </>
    );
};
