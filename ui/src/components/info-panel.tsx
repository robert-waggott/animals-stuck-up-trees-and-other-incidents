import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IncidentsService } from "../services/incidents-service";
import { FaExternalLinkAlt, FaRegMehRollingEyes } from "react-icons/fa";
import { IncidentDetailReducer, IncidentDetailReducerAction } from "../reducers/incident-detail-reducer";
import { DetailMap } from "./detail-map";
import styles from "./info-panel.module.scss";

export interface InfoPanelProps {
    incidentNumber: string | null;
}

export const InfoPanel = (props: InfoPanelProps) => {
    const [incident, dispatch] = React.useReducer(IncidentDetailReducer, { loading: true, errored: false });

    React.useEffect(() => {
        dispatch({ action: IncidentDetailReducerAction.Init });

        async function fetchData() {
            if (props.incidentNumber) {
                try {
                    const fetchedData = await new IncidentsService().getIncident(props.incidentNumber);

                    dispatch({ 
                        action: IncidentDetailReducerAction.DataFetched, 
                        payload: fetchedData 
                    });
                }
                catch {
                    dispatch({ action: IncidentDetailReducerAction.Error });
                }
            }
        };

        fetchData();
    }, [props.incidentNumber]);

    const style = { 
        display: props.incidentNumber ? "block" : "none",
        opacity: props.incidentNumber ? 1 : 0
    } as React.CSSProperties;

    if (incident.loading) {
        return (
            <>
                <div className={styles.loading} style={style}>
                    Loading...<br />
                    <FaRegMehRollingEyes className="fa-spin" />
                </div>
            </>
        );
    }

    if (incident.errored) {
        return (
            <>
                <div className={styles.errored} style={style}>
                    Oh noes! An error has occurred...
                </div>
            </>
        );
    }

    const latLng = { 
        lat: incident.incident?.Latitude, 
        lng: incident.incident?.Longitude 
    };

    return (
        <>
            <div className={styles.infoPanel} style={style}>
                <Container fluid>
                    <Row>
                        <Col><strong>Incident number</strong></Col>
                        <Col>{incident.incident?.IncidentNumber}</Col>
                    </Row>                    
                    <Row>
                        <Col><strong>Description</strong></Col>
                        <Col>{incident.incident?.Description}</Col>
                    </Row>
                    <Row>
                        <Col><strong>Type of animal</strong></Col>
                        <Col>{incident.incident?.TypeOfAnimal}</Col>
                    </Row>                    
                    <Row>
                        <Col><strong>Date &amp; time</strong></Col>
                        <Col>{incident.incident?.DateTime}</Col>
                    </Row>
                    <Row>
                        <Col><strong>Call origin</strong></Col>
                        <Col>{incident.incident?.OriginOfCall}</Col>
                    </Row>                        
                    <Row>
                        <Col><strong>Street</strong></Col>
                        <Col>{incident.incident?.Street}</Col>
                    </Row>
                    <Row>
                        <Col><strong>Postcode district</strong></Col>
                        <Col>{incident.incident?.PostcodeDistrict}</Col>
                    </Row>
                    <Row>
                        <Col><strong>Borough</strong></Col>
                        <Col>{incident.incident?.Borough}</Col>
                    </Row>                          
                    <Row>
                        <Col><strong>Ward</strong></Col>
                        <Col>{incident.incident?.Ward}</Col>
                    </Row>
                    <Row>
                        <Col className="text-left"><strong>Latitude/Longitude</strong></Col>
                        <Col>
                            <a href={"https://www.google.com/maps/search/?api=1&amp;query=" + incident.incident?.Latitude + "," + incident.incident?.Longitude} target="_blank" rel="noreferrer">
                                {incident.incident?.Latitude}, {incident.incident?.Longitude} 
                                <FaExternalLinkAlt />
                            </a>
                        </Col>
                    </Row>                     
                    <Row className={styles.mapContainer}>
                        <Col>
                            <DetailMap latLng={latLng} />
                        </Col>
                    </Row>                                                        
                </Container>                
            </div>
        </>
    );
};
