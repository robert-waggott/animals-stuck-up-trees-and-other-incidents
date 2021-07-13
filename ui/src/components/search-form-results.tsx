import React from "react";
import styles from "./search-form-results.module.scss";
import { FaChevronRight } from "react-icons/fa";
import { LocationSearchResponse, LocationSearchResult } from "../interfaces/location-search-response";

export interface SearchFormResultsProps {
    locationSearchResponse: LocationSearchResponse | null;
    onLocationClicked: (location: LocationSearchResult) => unknown;
}

export const SearchFormResults = (props: SearchFormResultsProps) => {
    if (!props.locationSearchResponse) {
        return <></>;
    }

    return (
        <div className={styles.searchFormResults}>
            {props.locationSearchResponse.results.map((result, index) => {
                return (
                    <div key={index} className="" onClick={() => props.onLocationClicked(result)}>
                        <p>{result.name}</p>
                        <span>{result.description}</span>
                        <span>{result.type}</span>
                        <FaChevronRight />
                    </div>
                );
            })}
            <div key={props.locationSearchResponse.results.length} className={styles.attribution}>
                <span>{props.locationSearchResponse.attribution}</span>
            </div>
        </div>
    );
};
