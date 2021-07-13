import React from "react";
import { Map as MapComponent } from "../components/map";
import { InfoPanel } from "../components/info-panel";
import { SearchForm } from "../components/search-form";
import { SearchFormResults } from "../components/search-form-results";
import { IncidentsService, IncidentsFeatureCollection } from "../services/incidents-service";
import { Config } from "../interfaces/config";
import { ConfigService } from "../services/config-service";
import { LocationSearchService } from "../services/location-search-service";
import { LocationSearchResponse, LocationSearchResult } from "../interfaces/location-search-response";
import { LatLng } from "../interfaces/latlng";

export const ConfigContext = React.createContext<Config | null>(null);

export const Map = () => {
    const [incidents, setIncidents] = React.useState<IncidentsFeatureCollection>();
    const [selectedIncidentNumber, setSelectedIncidentNumber] = React.useState<string | null>(null);
    const [config, setConfig] = React.useState<Config | null>(null);
    const [locationSearchResponse, setLocationSearchResponse] = React.useState<LocationSearchResponse | null>(null);
    const [centerPoint, setCenterPoint] = React.useState<LatLng | null>(null);

    React.useEffect(() => {
        async function fetchData() {
            const fetchedData = await new IncidentsService().getIncidentsAsGeoJson();

            setIncidents(fetchedData);
        }

        async function fetchConfig() {
            const config = await new ConfigService().getConfig();

            setConfig(config);
        }

        fetchData();
        fetchConfig();
    }, []);

    const onPointClicked = (id: string) => {
        setSelectedIncidentNumber(id);
    };

    const onSearchTermEntered = (term: string) => {
        if (!term) {
            setLocationSearchResponse(null);
            return;
        }

        async function performSearch() {
            const response = await new LocationSearchService().performSearch(term);

            setLocationSearchResponse(response);
        }

        performSearch();
    };

    const onSearchResultLocationClicked = (result: LocationSearchResult) => {
        setCenterPoint(result.center);
    };

    return (
        <ConfigContext.Provider value={config}>
            <SearchForm onSearchTermEntered={onSearchTermEntered} />
            <SearchFormResults locationSearchResponse={locationSearchResponse} onLocationClicked={onSearchResultLocationClicked} />
            <MapComponent incidentsGeoJson={incidents} centerPoint={centerPoint} onPointClicked={onPointClicked} />
            <InfoPanel incidentNumber={selectedIncidentNumber} />
        </ConfigContext.Provider>
    );
};
