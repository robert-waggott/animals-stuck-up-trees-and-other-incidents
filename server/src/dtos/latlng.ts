export class LatLng {
    constructor(public lat: number | null, public lng: number | null) {

    }

    get isValid(): boolean {
        return this.lat !== null && this.lng !== null && this.lat !== 0 && this.lng !== 0;
    }
}
