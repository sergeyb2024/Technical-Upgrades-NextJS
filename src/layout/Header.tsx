import React from 'react'
import PropTypes from 'prop-types'

function Header() {
  return (
    <nav className="flex flex-col justify-between bg-white shadow-md" >
    <div className="flex-row p-5">
        <a className="text-2xl font-bold text-dark-blue" href="/">Technical Upgrades</a>
        <p className="text-gray-600 font-light ml-4 -mt-1 justify-left leading-3">by Formula 1™ Racing Teams</p>
        <p className="flex indent-40 ml-3 -mt-1 italic text-gray-400 text-base font-light tracking-tight">a FAN app 🏁</p>
        <div className="pt-2.5 ml-2">
            <div className="flex justify-start">
                <p className="font-heavy -mb-1">Canada</p>
            </div>
            <div className="flex justify-start tracking-widest leading-tight indent-1 mb-1/3">
                <p className="text-gray-600 font-light">in</p>
                <p className="mx-1">12</p>
                <p className="text-gray-600 font-light">12:</p>
                <p className="mx-1">12</p>
                <p className="text-gray-600 font-light">12:</p>
                <p className="mx-1">12</p>
                <p className="text-gray-600 font-light">12</p>
            </div>
        </div>
    </div>
</nav>
  )
}

Header.propTypes = {}

export default Header
