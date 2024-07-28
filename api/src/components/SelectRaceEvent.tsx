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
        <div>
            <div className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                <select onChange={handleRaceSelection}>
                    {grandPrixList.map(grandPrix => (
                        <option key={grandPrix} value={grandPrix}>
                            {grandPrix}
                        </option>
                    ))}
                </select>
            </div>
                <div>
                    <SelectConstructorWhoMadeUpdates teamUpgradeInfo={teamUpgradeInfo} />
                </div>
        </div>
    );
}

SelectRaceEvent.propTypes = {
    grandPrixList: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.array.isRequired,
}

export default SelectRaceEvent;