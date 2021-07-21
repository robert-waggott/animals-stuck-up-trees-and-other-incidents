import React from "react";
import styles from "./search-form-results.module.scss";
import { FaChevronRight } from "react-icons/fa";
import { LocationSearchResponse, LocationSearchResult } from "../interfaces/location-search-response";
import { StaticMap } from "./static-map";

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
                    <div key={index} onClick={() => props.onLocationClicked(result)}>
                        <p>{result.name}</p>
                        <span>{result.description}</span>
                        <span>{result.type}</span>
                        <StaticMap mapboxAPIKey={props.locationSearchResponse!.mapboxAPIKey} latLng={result.center} />
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
