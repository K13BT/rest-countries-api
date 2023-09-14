import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchFilter = ({onSearch}) => {
  const [search, setSearch] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className='flex justify-between items-center m-20'>
        <div className='shadow-lg shadow-slate-200 px-8 py-5 w-96'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-5'/>
            <input placeholder='Search for a country...' value={search} onChange={onChange}/>
        </div>

        
        <select className='shadow-2'>
            <option>Filter by Region</option>
            <option className='africa'>Africa</option>
            <option className='america'>America</option>
            <option className='asia'>Asia</option>
            <option className='europe'>Europe</option>
            <option className='oceania'>Oceania</option>
        </select>
    </div>
  )
}

export default SearchFilter