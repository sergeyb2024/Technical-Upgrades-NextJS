"use client"

import { useState } from "react";
import SelectConstructorWhoMadeUpdates from './SelectConstructorWhoMadeUpdates';
import { getTeamsWithThisRaceEventUpdates } from "../helperFunctions/structuredData";



const SelectRaceEvent = ({grandPrixList, dbData}) => {
    const [raceLocation, setRaceLocation] = useState<string[]>(grandPrixList[0]);

    function handleRaceSelection(e) {
        setRaceLocation(e.target.value);
    }

    const teamsWhoBroughtUpgrades = getTeamsWithThisRaceEventUpdates(dbData, raceLocation);

    const teamUpgradesInfo = teamsWhoBroughtUpgrades.map(grandPrix =>
        grandPrix !== undefined ? Object.keys(grandPrix): []
    );

    return (
        <div className="SelectRaceEvent">
            <select onChange={handleRaceSelection}>
                {grandPrixList.map(grandPrix => (
                    <option key={grandPrix} value={grandPrix}>
                        {grandPrix}
                    </option>
                ))}
            </select>
            <SelectConstructorWhoMadeUpdates teamUpgradesInfo={teamUpgradesInfo} />
        </div>
    );
}

export default SelectRaceEvent;