import React from 'react'
import PropTypes from 'prop-types'
import data from '../mock-data'
import SelectRaceEvent from '@/components/SelectRaceEvent'
import { getRaceEvent } from '../helperFunctions/structuredData';


function Main() {
    const grandPrixList: Set<string> = getRaceEvent(data);
    return (
        <div className="bg-transparent ">
            <div className="container mx-auto px-4 py-8">
                <div className="mt-8">
                <div className="flex flex-col items-center">
                    <form className="w-full max-w-sm" action="/" method="post">
                        <div className="flex flex-col space-y-4">
                            <SelectRaceEvent grandPrixList={Array.from(grandPrixList)} data={data} />
                            <button type="submit"
                                className="w-full bg-blue text-blue py-2 px-4 rounded-md hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50">
                                Request information
                                <svg className="inline w-4 h-4 ml-2 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <section className="mt-8">
                <div className="bg-transparent p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-gray-dark mb-4">
                        constructorTitle
                    </h1>
                    <h2 className="text-xl font-medium text-gray mb-4">
                        eventDisplay
                    </h2>

                    <p className="text-gray text-left ml-3 mr-5">

                        <div className="relative flex py-5 items-center">
                            <span className="flex-shrink mx-4 text-gray-400"></span>
                        </div>
                    </p>
                </div>
            </section>
        </div>
</div>
  )
}

Main.propTypes = {}

export default Main
