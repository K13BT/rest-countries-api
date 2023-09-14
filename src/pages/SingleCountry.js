import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SingleCountryInfo from '../components/SingleCountryInfo'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCountryNameByCode, getSingleCountry } from '../Global/fetch'

const SingleCountry = () => {
    const [country, setCountry] = useState()
    const [borders, setBorders] = useState([])
    const { name } = useParams() 
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const fetchedCountry = await getSingleCountry(name)
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
            } catch (err) {
                console.log(err)
            }
        }
        fetchCountry()
    }, [name])

  return (
    <div className='m-20'>
        <button 
            className='mb-20 shadow-md shadow-slate-300 px-8 py-2'
            onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeftLong} className='mr-2' />
            Back
        </button>

        {country && (
            <main className='grid grid-cols-2 gap-28'>
                <img src={country.flags.svg} alt={country.flags.alt} className='w-full' />

                <SingleCountryInfo country={country} borders={borders} />
            </main>
        )}
    </div>
  )
}

export default SingleCountry