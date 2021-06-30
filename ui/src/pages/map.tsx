import React from "react";
import { Map as MapComponent, MapProps } from "../components/map";
import { InfoPanel, InfoPanelProps } from "../components/info-panel";
import { SearchForm, SearchFormProps } from "../components/search-form";
import { IncidentsService, IncidentsFeatureCollection } from '../services/incidents-service';

export const Map = () => {
    const [incidents, setIncidents] = React.useState<IncidentsFeatureCollection>();
    const [selectedIncidentNumber, setSelectedIncidentNumber] = React.useState<string | null>(null);
    
    React.useEffect(() => {
        async function fetchData() {
            const fetchedData = await new IncidentsService().getIncidentsAsGeoJson();  
                    
            setIncidents(fetchedData);    
        };

        fetchData();
    }, []);

    const onPointClicked = (id: string) => {
        setSelectedIncidentNumber(id);
    };

    const onSearchTermEntered = (term: string) => {
        console.log(term);
    };

    return (
        <div className="App">
            <SearchForm onSearchTermEntered={onSearchTermEntered} />
            <MapComponent incidentsGeoJson={incidents} onPointClicked={onPointClicked} />
            <InfoPanel incidentNumber={selectedIncidentNumber} />
        </div>
    );    
};
