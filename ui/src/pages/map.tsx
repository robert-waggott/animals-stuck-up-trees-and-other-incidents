import React from "react";
import { Map as MapComponent } from "../components/map";
import { InfoPanel } from "../components/info-panel";
import { SearchForm } from "../components/search-form";
import { SearchFormResults, SearchFormResultType } from "../components/search-form-results";
import { IncidentsService, IncidentsFeatureCollection } from '../services/incidents-service';
import { Config } from '../interfaces/config';
import { ConfigService } from "../services/config-service";

export const ConfigContext = React.createContext<Config | null>(null);

export const Map = () => {
    const [incidents, setIncidents] = React.useState<IncidentsFeatureCollection>();
    const [selectedIncidentNumber, setSelectedIncidentNumber] = React.useState<string | null>(null);
    const [config, setConfig] = React.useState<Config | null>(null);
    
    React.useEffect(() => {
        async function fetchData() {
            const fetchedData = await new IncidentsService().getIncidentsAsGeoJson();  
                    
            setIncidents(fetchedData);    
        };

        async function fetchConfig() {
            const config = await new ConfigService().getConfig();

            setConfig(config);    
        };        

        fetchData();
        fetchConfig();
    }, []);

    const onPointClicked = (id: string) => {
        setSelectedIncidentNumber(id);
    };

    const onSearchTermEntered = (term: string) => {
        console.log(term);
    };

    return (
        <ConfigContext.Provider value={config}>
            <SearchForm onSearchTermEntered={onSearchTermEntered} />
            <SearchFormResults results={[
                { text: "Letchworth Garden City", type: SearchFormResultType.Town },
                { text: "Common Road, Stotfold", type: SearchFormResultType.Address },
                { text: "SG6 3SA", type: SearchFormResultType.Postcode }
            ]} />
            <MapComponent incidentsGeoJson={incidents} onPointClicked={onPointClicked} />
            <InfoPanel incidentNumber={selectedIncidentNumber} />
        </ConfigContext.Provider>
    );    
};
