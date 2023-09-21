import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const Header = ({toggleDarkMode, darkMode}) => {
  return (
    <header className='border-b-4 border-b-slate-200 dark:border-b-light_mode_text dark:bg-dark_mode_elements flex items-center justify-between md:px-20 px-4 py-5'>
        <Link to='/'><h2 className='font-bold text-lg md:text-xl'>Where in the world?</h2></Link>

        <button onClick={toggleDarkMode} className='md:text-lg text-base'>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className='mr-3' />
            <span className='font-semibold'>Dark Mode</span>
        </button>
    </header>
  )
}

export default Header