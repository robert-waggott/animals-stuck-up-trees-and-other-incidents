import moment from "moment";

export interface Incident {
    IncidentNumber: string;
    DateTime: moment.MomentInput;
    Type: string;
    PumpCount: number;
    PumpHours: number;
    Description: string;
    TypeOfAnimal: string;
    OriginOfCall: string;
    PropertyType: string;
    PropertyCategory: string;
    Ward?: string;
    Borough?: string;
    Street?: string;
    PostcodeDistrict?: string;
    Latitude: number | null;
    Longitude: number | null;    
}
