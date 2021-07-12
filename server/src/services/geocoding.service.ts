import { LatLng } from "./../dtos/latlng";
import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import axios from "axios";
import { LocationSearchResponse } from "src/interfaces/location-search-response.interface";

@Injectable()
export class GeocodingService extends BaseService {
    async forwardGeocode(searchTerm: string): Promise<LocationSearchResponse> {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?access_token=${process.env.MAPBOXAPIKEY}&country=gb&types=region,postcode,district,place,locality,neighborhood,address,poi`;

        const response = await axios.get(url);

        return {
            mapboxAPIKey: process.env.MAPBOXAPIKEY,
            attribution: response.data.attribution,
            results: response.data.features.map((feature) => ({
                name: feature.text,
                description: feature.place_name,
                type: feature.place_type[0],
                center: new LatLng(feature.center[1], feature.center[0]),
                relevance: feature.relevance
            }))
        };
    }

    reverseGeocode() {
        throw Error("Not implemented");
    }
}
