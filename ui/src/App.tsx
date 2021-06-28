import React from 'react';
import logo from './logo.svg';
import { Map, MapProps } from "./components/map";
import { IncidentsService, IncidentsFeatureCollection } from './services/incidents-service';
import './App.css';

function App() {
    const [incidents, setIncidents] = React.useState<IncidentsFeatureCollection>();
    const [selectedIncidentNumber, setSelectedIncidentNumber] = React.useState<number | null>(null);
    
    React.useEffect(() => {
        async function fetchData() {
            const fetchedData = await new IncidentsService().getIncidentsAsGeoJson();  
                    
            setIncidents(fetchedData);    
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <Map IncidentsGeoJson={incidents} />
        </div>
    );
}

export default App;
