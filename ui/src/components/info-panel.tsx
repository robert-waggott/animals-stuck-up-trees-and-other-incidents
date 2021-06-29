import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
                <Container fluid>
                    <Row>
                        <Col><strong>Incident number</strong></Col>
                        <Col>{incident?.IncidentNumber}</Col>
                    </Row>                    
                    <Row>
                        <Col><strong>Description</strong></Col>
                        <Col>{incident?.Description}</Col>
                    </Row>
                    <Row>
                        <Col><strong>Type of animal</strong></Col>
                        <Col>{incident?.TypeOfAnimal}</Col>
                    </Row>                    
                    <Row>
                        <Col><strong>Date &amp; time</strong></Col>
                        <Col>{incident?.DateTime}</Col>
                    </Row>
                    <Row>
                        <Col><strong>Call origin</strong></Col>
                        <Col>{incident?.OriginOfCall}</Col>
                    </Row>                        
                    <Row>
                        <Col><strong>Street</strong></Col>
                        <Col>{incident?.Street}</Col>
                    </Row>
                    <Row>
                        <Col><strong>Postcode district</strong></Col>
                        <Col>{incident?.PostcodeDistrict}</Col>
                    </Row>
                    <Row>
                        <Col><strong>Borough</strong></Col>
                        <Col>{incident?.Borough}</Col>
                    </Row>                          
                    <Row>
                        <Col><strong>Ward</strong></Col>
                        <Col>{incident?.Ward}</Col>
                    </Row>
                    <Row>
                        <Col className="text-left"><strong>Latitude/Longitude</strong></Col>
                        <Col>
                            <a href="https://www.google.com/maps/search/?api=1&amp;query={incident?.Latitude},{incident?.Longitude}" target="_blank" rel="noreferrer">
                                {incident?.Latitude}, {incident?.Longitude}
                            </a>
                        </Col>
                    </Row>                     
                    <Row>
                        <Col>[map]</Col>
                    </Row>                                                        
                </Container>                
            </div>
        </>
    );
};
