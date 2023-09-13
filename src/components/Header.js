import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = ({darkMode, setDarkMode}) => {
  return (
    <header className='border-b-4 border-b-slate-200 flex items-center justify-between px-20 py-5'>
        <Link to='/'><h2 className='font-bold text-xl'>Where in the world?</h2></Link>

        <button onClick={() => setDarkMode(darkMode => !darkMode)}>
            <FontAwesomeIcon icon={faMoon} className='mr-3' />
            <span className='font-semibold'>Dark Mode</span>
        </button>
    </header>
  )
}

export default Header