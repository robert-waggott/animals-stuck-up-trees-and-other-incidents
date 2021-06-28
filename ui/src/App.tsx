import React from 'react';
import logo from './logo.svg';
import { Map } from "./components/map";
import { IncidentsService } from './services/incidents-service';
import './App.css';

function App() {
    const incidents = new IncidentsService().getIncidentsAsGeoJson();
    const [selectedIncidentNumber, setSelectedIncidentNumber] = React.useState<number | null>(null);

    return (
        <div className="App">
            <Map />
        </div>
    );
}

export default App;
