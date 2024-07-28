export type DBData = {
    RaceName: string;
    Constructor: string;
    RequiredEventDisplay: string;
}[]

export type UniqueEventNames = {
    RaceName: string;
}[];

export type TeamsByRaceEvent = {
    RaceName: string;
    Constructor: string;
    RequiredEventDisplay: string;
}[];

export type TeamsAtTheRaceEvent = {
    [key: string]:{
        [key:string]:{
            constructor: string;
            eventDisplayName: string;
            events: DBData[];
        }
    }
};
