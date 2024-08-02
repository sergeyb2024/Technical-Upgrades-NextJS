'use client'

import type { DBData } from "@/types/types";
import { useState } from "react";
import SelectConstructorWhoMadeUpdates from './SelectConstructorWhoMadeUpdates';
import { getTeamsWithThisRaceEventUpdates } from "../helperFunctions/structuredData";
import PropTypes from 'prop-types';


const SelectRaceEvent = ({ grandPrixList, data }: { grandPrixList: string[], data: DBData }) => {
    const [raceLocation, setRaceLocation] = useState<string>(grandPrixList[0]);

    function handleRaceSelection(e: React.ChangeEvent<HTMLInputElement>) {
        setRaceLocation(e.target.value);
    }
    


    const teamsWhoBroughtUpgrades = getTeamsWithThisRaceEventUpdates(data, raceLocation);
    const teamUpgradeInfo = teamsWhoBroughtUpgrades ? Object.keys(teamsWhoBroughtUpgrades) : [];
    const descriptives = teamsWhoBroughtUpgrades ? Object.values(teamsWhoBroughtUpgrades) : []

    return (
      <div>
            <div>
                <select className=" inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 max-w-100" label="Select Race" onChange={handleRaceSelection}>
                    {grandPrixList.map(grandPrix => (
                        <option key={grandPrix} value={grandPrix}>
                            {grandPrix}
                        </option>
                    ))}
                </select>
            </div>
                    <SelectConstructorWhoMadeUpdates descriptives={descriptives} teamUpgradeInfo={teamUpgradeInfo}/>
        </div>
    );
}

SelectRaceEvent.propTypes = {
    grandPrixList: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.array.isRequired,
}

export default SelectRaceEvent;