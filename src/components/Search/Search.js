import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons'


function Search() {
  return (
    <div className="bg-slate-100 rounded-lg h-9 w-full  mt-20  ml-3  flex items-center  mb-2 decoration-inherit no-underline">
    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600 pr-7 pl-6" />
    <input
      className=" text-slate-800 text-sm bg-slate-100 ml-3 decoration-inherit no-underline"
      type="search"
      placeholder="Search"
    />
  </div>
  )
}

export default Search