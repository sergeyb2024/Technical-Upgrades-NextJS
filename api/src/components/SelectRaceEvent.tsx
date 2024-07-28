'use client'

import type { DBData } from "@/types/types";
import { useState } from "react";
import SelectConstructorWhoMadeUpdates from './SelectConstructorWhoMadeUpdates';
import { getTeamsWithThisRaceEventUpdates } from "../helperFunctions/structuredData";
import PropTypes from 'prop-types';


const SelectRaceEvent = ({grandPrixList, data}:{grandPrixList: string[], data: DBData}) => {
    const [raceLocation, setRaceLocation] = useState<string>(grandPrixList[0]);

    function handleRaceSelection(e: React.ChangeEvent<HTMLInputElement>) {
        setRaceLocation(e.target.value);
    }

    const teamsWhoBroughtUpgrades = getTeamsWithThisRaceEventUpdates(data, raceLocation);

    const teamUpgradeInfo = teamsWhoBroughtUpgrades ? Object.keys(teamsWhoBroughtUpgrades) : [];

    return (
        <div className="SelectRaceEvent">
            <select onChange={handleRaceSelection}>
                {grandPrixList.map(grandPrix => (
                    <option key={grandPrix} value={grandPrix}>
                        {grandPrix}
                    </option>
                ))}
            </select>
            <SelectConstructorWhoMadeUpdates teamUpgradeInfo={teamUpgradeInfo} />
        </div>
    );
}

SelectRaceEvent.propTypes = {
    grandPrixList: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.array.isRequired,
}

export default SelectRaceEvent;