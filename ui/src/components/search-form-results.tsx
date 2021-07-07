import React from "react";
import styles from "./search-form-results.module.scss";
import { FaChevronRight } from "react-icons/fa";

export interface SearchFormResultsProps {
    results: SearchFormResult[];
}

export interface SearchFormResult {
    text: string;
    type: SearchFormResultType;
}

export enum SearchFormResultType {
    Town,
    Address,
    Postcode
}

export const SearchFormResults = (props: SearchFormResultsProps) => {    
    return (
        <div className={styles.searchFormResults}>
            {props.results.map((result, index) => {
                return (
                    <div key={index} className="">
                        <p>{result.text}</p>
                        <span>{SearchFormResultType[result.type]}</span>
                        <FaChevronRight />
                    </div>
                );
            })}
        </div>
    );
};
