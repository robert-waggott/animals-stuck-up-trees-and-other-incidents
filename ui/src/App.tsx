import React from 'react';
import logo from './logo.svg';
import { Map, MapProps } from "./components/map";
import { InfoPanel, InfoPanelProps } from "./components/info-panel";
import { SearchForm, SearchFormProps } from "./components/search-form";
import { IncidentsService, IncidentsFeatureCollection } from './services/incidents-service';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
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
            <Map incidentsGeoJson={incidents} onPointClicked={onPointClicked} />
            <InfoPanel incidentNumber={selectedIncidentNumber} />
        </div>
    );
}

export default App;
