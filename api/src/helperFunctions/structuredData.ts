import type { DBData, TeamsAtTheRaceEvent } from "@/types/types";
/*
 - getRaceEvent will show unique RaceEvent values 
 in a form of string[] (["a", "b", "c"])
 - selected value is passed into getTeamsWithThisRaceEventUpdates 
 as a `location` string to get race teams at the event 
*/

export const getRaceEvent = (data: DBData): Set<string> => {
    const uniqueRaceEventNames = new Set<string>();

    data.map(item => {
        uniqueRaceEventNames.add(item.RaceName)
    })
    return uniqueRaceEventNames
};

/*
 - getTeamsWithThisRaceEventUpdates will display teams that made upgrades after user selects the race event.
 - {actualRaceEventNameAsKey:{available-data-from-teams:{}}}
*/

export const getTeamsWithThisRaceEventUpdates = (data: DBData, location: string): TeamsAtTheRaceEvent | undefined => {
    let dataByLocation: TeamsAtTheRaceEvent = {}

    data.forEach((item) => {
        const raceName = item.RaceName;
        const constructor = item.Constructor;

        if (!dataByLocation[raceName]) {
            dataByLocation[raceName] = {};
        }

        if (!dataByLocation[raceName][constructor]) {
            dataByLocation[raceName][constructor] = {
                constructor,
                eventDisplayName: item.RequiredEventDisplay,
                events: [],
            };
        }
        dataByLocation[raceName][constructor].events.push(item);
    });
    return dataByLocation[location];
}
