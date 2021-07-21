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
        return await this.geoCodingService.forwardGeocode(searchTerm);
    }
}
