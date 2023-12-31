import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SingleCountryInfo from '../components/SingleCountryInfo'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCountryNameByCode, getSingleCountry } from '../Global/fetch'
import NoCountryFound from '../components/NoCountryFound'
import Loading from '../components/Loading'

const SingleCountry = () => {
    const [country, setCountry] = useState({})
    const [borders, setBorders] = useState([])
    const [loading, setLoading] = useState(true)
    const { name } = useParams() 
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCountry = async () => {
            const fetchedCountry = await getSingleCountry(name)
            setLoading(false)
            setCountry(fetchedCountry)

            if (fetchedCountry.borders) {
                const borderNames = await Promise.all((fetchedCountry.borders).map(async border => {
                    const countryName = await getCountryNameByCode(border)
                    return countryName.name.common
                }))
                setBorders(borderNames)          
            } else {
                return 
            }
        }
        fetchCountry()
    }, [name])

  return (
    <div className='md:p-20 p-10 min-h-screen text-base'>
        <button 
            className='mb-20 shadow-lg shadow-slate-200 px-8 py-2 dark:bg-dark_mode_elements dark:shadow-light_mode_text'
            onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeftLong} className='mr-2' />
            Back
        </button>

        {loading ? <Loading /> : Object.keys(country).length === 0 ? <NoCountryFound /> : (
            <main className='grid md:grid-cols-2 gap-x-28 gap-y-10'>
                <img src={country.flags.svg} alt={country.flags.alt} className='w-full' />

                <SingleCountryInfo country={country} borders={borders} />
            </main>
        )}
    </div>
  )
}

export default SingleCountry