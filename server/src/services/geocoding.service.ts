import { Injectable } from '@nestjs/common';
import { BaseService } from "./base.service";

@Injectable()
export class GeocodingService extends BaseService {
    forwardGeocode() {
        throw Error("Not implemented");
    }

    reverseGeocode() {
        throw Error("Not implemented");
    }
}
