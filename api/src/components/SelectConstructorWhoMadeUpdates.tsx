'use client'

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import type { TeamsAtTheRaceEvent } from '@/types/types'
import Description from './Description';

const SelectConstructorWhoMadeUpdates = ({ teamUpgradeInfo, descriptives }: {teamUpgradeInfo: string[], descriptives: TeamsAtTheRaceEvent}) => {
    const [raceTeam, setRaceTeam] = useState<string[]>([]);  
    const [raceTeamSelected, setRaceTeamSelected] = useState<string>("");  

    function handleRaceTeamSelection(e: React.ChangeEvent<HTMLInputElement>) {
        setRaceTeamSelected(e.target.value);
    }
    

    useEffect(() => {
        if (teamUpgradeInfo.length > 0) {
            setRaceTeam(teamUpgradeInfo);
        }
    }, [teamUpgradeInfo]);
    
    return (
        <div>
        <div >
            <select className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onChange={handleRaceTeamSelection}>
                {raceTeam.map((item, index) => (
                    <option className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in" key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
        <div>
            <Description descriptives={descriptives} raceTeamSelected={raceTeamSelected}/>
        </div>
        </div>
    );
}

SelectConstructorWhoMadeUpdates.propTypes = {};

export default SelectConstructorWhoMadeUpdates;