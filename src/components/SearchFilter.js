import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchFilter = ({onSearch, onFilter}) => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  }

  const onRegionChange = (e) => {
    setFilter(e.target.value)
    onFilter(e.target.value)
  }

  return (
    <div className='flex justify-between items-center m-20'>
        <div className='shadow-lg shadow-slate-200 px-8 py-5 w-96'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-5'/>
            <input placeholder='Search for a country...' value={search} onChange={onChange}/>
        </div>

        
        <select className='shadow-2' value={filter} onChange={onRegionChange} >
            <option>Filter by Region</option>
            <option value='all'>All</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
        </select>
    </div>
  )
}

export default SearchFilter