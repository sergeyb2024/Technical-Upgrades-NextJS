import React from 'react'
import PropTypes from 'prop-types'
import data from '../mock-data'
import SelectRaceEvent from '@/components/SelectRaceEvent'
import { getRaceEvent } from '../helperFunctions/structuredData';


function Main() {
    const grandPrixList: Set<string> = getRaceEvent(data);
    return (   
      <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ">
        <SelectRaceEvent grandPrixList={Array.from(grandPrixList)} data={data} />
      </div> 
  )
}

Main.propTypes = {}

export default Main
