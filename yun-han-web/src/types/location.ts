export class Location {
  public name: string;
  public fullName: string;
  public lng: number;
  public lat: number;

  constructor(name: string, fullName: string, lng: number, lat: number) {
    this.name = name;
    this.fullName = fullName;
    this.lng = lng;
    this.lat = lat;
  }
}
