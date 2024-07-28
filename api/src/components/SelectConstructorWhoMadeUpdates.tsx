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
        <div>
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