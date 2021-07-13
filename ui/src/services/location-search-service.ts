import { LocationSearchResponse } from "../interfaces/location-search-response";
import { BaseService } from "./base-service";

export class LocationSearchService extends BaseService {
    async performSearch(searchTerm: string): Promise<LocationSearchResponse> {
        // todo: really should make this a post...
        return await this.get(
            `http://localhost:3001/LocationSearch/${searchTerm}`
        );
    }
}
