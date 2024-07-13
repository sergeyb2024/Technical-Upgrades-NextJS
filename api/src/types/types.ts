type DBData = {
    Year: number;
    RaceNo: number;
    RaceName: string;
    Constructor: string;
    RequiredEventDisplay: string;
    ComponentNo: number;
    UpdatedComponent: string;
    PrimaryReason: string;
    GeometricDifferences: string;
    Description: string;
}[]


export type UniqueEventNames = {
    RaceName: string;
}[];

export type TeamsByRaceEvent = {
    RaceName: string;
    Constructor: string;
}[];

export type TeamsAtTheRaceEvent = {
    [key: string]:{
        [key:string]:{
            constructor: string;
            events: DBData;
        }
    }
}
