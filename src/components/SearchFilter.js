import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']

const SearchFilter = ({onSearch, onFilter}) => {
  const [search, setSearch] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [filterLabel, setFilterLabel] = useState('Filter by Region')
  const inputElement = useRef()

  const onChange = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  }

  const onRegionChange = value => {
    setFilterLabel(value)
    onFilter(value.toLowerCase())
  }

  const focusInput = () => {
    inputElement.current.focus()
  }

  return (
    <div className='md:flex grid gap-y-14 justify-between items-center md:m-20 m-6'>
        <div className='px-8 py-5 w-80 md:w-96 bg-white dark:bg-dark_mode_elements dark:shadow-light_mode_text shadow-lg shadow-slate-200 rounded-md hover:cursor-text' onClick={focusInput}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-5'/>
            <input placeholder='Search for a country...' value={search} onChange={onChange} className='focus:outline-none dark:bg-dark_mode_elements' ref={inputElement} />
        </div>

        <div className='focus:outline-none w-56 text-center font-semibold relative bg-white dark:bg-dark_mode_elements dark:shadow-light_mode_text shadow-lg shadow-slate-200'>
            <button className='mb-2 p-4 rounded-md flex justify-between w-full items-center' onClick={() => setShowOptions(showOptions => !showOptions)}>
              <span>{filterLabel}</span>
              <FontAwesomeIcon icon={showOptions ? faChevronUp : faChevronDown} size='sm' />
            </button>
            
            {showOptions && (
              <div className='grid gap-y-2 justify-items-start absolute dark:bg-dark_mode_elements bg-white w-full right-0 top-20 p-6 rounded-md dark:shadow-light_mode_text shadow-lg shadow-slate-200'>
                {regions.map((region, index) => (
                  <button key={index}
                    onClick={() => onRegionChange(region)}>
                    {region}
                  </button>
                ))}
              </div>
            )}
        </div>
    </div>
  )
}

export default SearchFilter