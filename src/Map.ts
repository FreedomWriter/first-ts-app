export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent():string;
}

export class CustomMap {
    // googleMap will be an instance of the google.maps.Map class
    // set to private so that we can limit access to the google map api
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mark: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mark.location.lat,
                lng: mark.location.lng
            }
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mark.markerContent()
            });

            infoWindow.open(this.googleMap, marker)
        })
    }

}