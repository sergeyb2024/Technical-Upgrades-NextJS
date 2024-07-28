'use client'

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const SelectConstructorWhoMadeUpdates = ({ teamUpgradeInfo }: {teamUpgradeInfo: string[]}) => {
    const [raceTeam, setRaceTeam] = useState<string[]>([]);

    useEffect(() => {
        if (teamUpgradeInfo.length > 0) {
            setRaceTeam(teamUpgradeInfo);
        }
    }, [teamUpgradeInfo]);

    return (
        <div className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
            <select>
                {raceTeam.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
}

SelectConstructorWhoMadeUpdates.propTypes = {};

export default SelectConstructorWhoMadeUpdates;