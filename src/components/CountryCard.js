import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({country}) => {
  return (
    <Link to={`/name/${country.name.common}`}>
      <div className='h-[325px] shadow-lg shadow-slate-200'>
        <img src={country.flags.svg} alt={country.flags.alt} className='h-[48%] object-cover' />
        <div className='p-5'>
            <h3 className='font-bold text-lg mb-3'>{country.name.common}</h3>

            <div>
                <div><span className='font-semibold'>Population: </span><span>{country.population}</span></div>
                <div><span className='font-semibold'>Region: </span><span>{country.region}</span></div>
                <div><span className='font-semibold'>Capital: </span><span>{country.capital}</span></div>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard