import React from "react";
import { Incident } from "../interfaces/incident";
import { IncidentsService } from "../services/incidents-service";

export interface InfoPanelProps {
    incidentNumber: string | null;
}

export const InfoPanel = (props: InfoPanelProps) => {
    const [incident, setIncident] = React.useState<Incident | null>(null);

    React.useEffect(() => {
        async function fetchData() {
            if (props.incidentNumber) {
                const fetchedData = await new IncidentsService().getIncident(props.incidentNumber);  
                    
                setIncident(fetchedData);
            }
        };

        fetchData();
    }, [props.incidentNumber]);

    return (
        <>
            <div style={{ 
                position: "fixed", 
                top: 0, 
                bottom: 0, 
                right: 0, 
                width: "500px", 
                height: "100%", 
                opacity: props.incidentNumber ? 1 : 0, 
                transition: "all 1s ease-in",
                zIndex: 999, 
                backgroundColor: "white"
            }}>
                <p>{props.incidentNumber}</p>
            </div>
        </>
    );
};
