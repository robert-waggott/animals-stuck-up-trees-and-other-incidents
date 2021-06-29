import { Incident } from "../interfaces/incident";

export enum IncidentDetailReducerAction {
    Init = "Init",
    DataFetched = "DataFetched",
    Error = "Error"
}

export interface IncidentDetailReducerOutput {
    loading: boolean;
    errored: boolean;
    incident?: Incident;
}

export interface IncidentDetailReducerInput {
    action: IncidentDetailReducerAction;
    payload?: Incident;
}

export const IncidentDetailReducer = (state: IncidentDetailReducerOutput, action: IncidentDetailReducerInput): IncidentDetailReducerOutput => {
    switch (action.action) {
        case IncidentDetailReducerAction.Init: 
        return { loading: true, errored: false };

        case IncidentDetailReducerAction.DataFetched: 
        return { loading: false, errored: false, incident: action.payload };  
        
        case IncidentDetailReducerAction.Error: 
        return { loading: false, errored: true };          
    }
};
