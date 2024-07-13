'use client'

import { useState, useEffect } from 'react';


const SelectConstructorWhoMadeUpdates = ({ teamUpgradesInfo }) => {
    const [raceTeam, setRaceTeam] = useState([]);

    useEffect(() => {
        if (teamUpgradesInfo.length > 0) {
            setRaceTeam(teamUpgradesInfo[0]);
        }
    }, [teamUpgradesInfo]);

    return (
        <div>
            <select>
                {raceTeam.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectConstructorWhoMadeUpdates;