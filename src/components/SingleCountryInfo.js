import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleCountryInfo = ({country, borders}) => {
    const navigate = useNavigate()

  return (
    <section className='self-center'>
        <h2 className='font-bold text-2xl mb-8'>{country.name.common}</h2>

        <div className='flex justify-between mb-14'>
            <div className='grid gap-y-2'>
                <div>
                    <span className='font-semibold'>Native Name: </span>
                    <span>{country.name.common}</span>
                </div>
                <div>
                    <span className='font-semibold'>Population: </span>
                    <span>{country.population}</span>
                </div>
                <div>
                    <span className='font-semibold'>Region: </span>
                    <span>{country.region}</span>
                </div>
                <div>
                    <span className='font-semibold'>Sub Region: </span>
                    <span>{country.subregion}</span>
                </div>
                <div>
                    <span className='font-semibold'>Capital: </span>
                    <span>{country.capital}</span>
                </div>
            </div>

            <div className='grid gap-y-2'>
                <div>
                    <span className='font-semibold'>Top Level Domain: </span>
                    <span>{country.tld}</span>
                </div>
                <div>
                    <span className='font-semibold'>Currencies: </span>
                    <span>{country.currencies.official}</span>
                </div>
                <div>
                    <span className='font-semibold'>Languages: </span>
                    <span></span>
                </div>
            </div>
        </div>

        <div>
            <span className='font-semibold mr-4'>Border Countries: </span>
            {borders.map((border, index) => 
            <button 
                className='shadow-md shadow-slate-300 px-8 py-2 mr-2'
                key={index}
                onClick={() => navigate(`/name/${border}`)}>
                {border}              
            </button>)}
        </div>
    </section>
  )
}

export default SingleCountryInfo