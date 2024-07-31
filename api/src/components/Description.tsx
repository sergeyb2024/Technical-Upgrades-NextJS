import React from 'react'
import type { TeamsAtTheRaceEvent } from '@/types/types'
import PropTypes from 'prop-types'

function Description({descriptives, raceTeamSelected}:{descriptives: TeamsAtTheRaceEvent, raceTeamSelected: string}) {

  
    const displayItems = Object.values(descriptives)
    .filter(item => item.constructor === raceTeamSelected)
    .flatMap(item => item.events.map(event => ({
        Description: event.Description,
        UpdatedComponent: event.UpdatedComponent
    }))
    );
  
  return (
    <div>
            {displayItems.map((item, index) => (
                <div key={index}>
                    <p>Updated Component: {item.UpdatedComponent}</p>
                    <p>Description {item.Description}</p>
                </div>
            ))}
    </div>
  )
}

Description.propTypes = {
    descriptives: PropTypes.object.isRequired,
    raceTeamSelected: PropTypes.string.isRequired,
}

export default Description
