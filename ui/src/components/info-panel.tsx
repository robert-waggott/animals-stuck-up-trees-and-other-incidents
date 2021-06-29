import React from "react";

export interface InfoPanelProps {
    incidentNumber: string | null;
}

export const InfoPanel = (props: InfoPanelProps) => {
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
