import type { UniqueEventNames, TeamsByRaceEvent, TeamsAtTheRaceEvent } from "../types/types"

/*
 - getRaceEvent will show unique RaceEvent values 
 in a form of string[] (["a", "b", "c"])
 - selected value is passed into getTeamsWithThisRaceEventUpdates 
 as a `location` string to get race teams at the event 
*/


export const getRaceEvent = (data:UniqueEventNames):string[] => {
    const uniqueRaceEventNames = new Set<string>();
    if(Array.isArray(data)){
        data.forEach(item => {
            uniqueRaceEventNames.add(item.RaceName)
        })
    }else{
        console.log('type mismatch')
    }
    return Array.from(uniqueRaceEventNames);
}


/*
 - getTeamsWithThisRaceEventUpdates will display teams that made upgrades after user selects the race event.
 - {actualRaceEventNameAsKey:{available-data-from-teams:{}}}
*/

export const getTeamsWithThisRaceEventUpdates = ((data: TeamsByRaceEvent, location: string):TeamsAtTheRaceEvent | undefined => {
    const dataByLocation: TeamsAtTheRaceEvent = {}

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
        dataByLocation[raceName][constructor].events.push({
            ...item,
        });
    });
    return dataByLocation[location];
})
