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
    [raceName: string]:{
        [constructor: string]:{
            constructor: string;
            eventDisplayName: string;
            events: DBData[];
        }
    }
};
