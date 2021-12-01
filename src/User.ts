import faker from "faker";
import { Mappable } from "./map";

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            // faker returns strings for lat and lng, we need to convert
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent():string {
        return this.name
    }
}