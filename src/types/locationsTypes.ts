export interface ILocations {
  Version: number,
  Key: string,
  Type: string,
  Rank: number,
  LocalizedName: string,
  Country: IFetchedLocation,
  AdministrativeArea: IFetchedLocation,
}

interface IFetchedLocation {
  ID: string,
  LocalizedName: string,
}
