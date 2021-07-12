import { LocationSearchResponse } from "./interfaces/location-search-response.interface";
import { GeocodingService } from "./services/geocoding.service";
import { Controller, Get, Param } from "@nestjs/common";

@Controller("LocationSearch")
export class LocationSearchController {
    constructor(private geoCodingService: GeocodingService) {}

    @Get(":searchTerm")
    async get(
        @Param("searchTerm") searchTerm: string
    ): Promise<LocationSearchResponse> {
        // static map url: https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ff0000(-1.337153,53.590155)/-1.3372,53.5902,10,0/300x100?access_token={TOKEN}

        return await this.geoCodingService.forwardGeocode(searchTerm);
    }
}
