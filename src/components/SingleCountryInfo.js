import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleCountryInfo = ({country, borders}) => {
    const navigate = useNavigate()

  return (
    <section className='py-10 grid jus'>
        <h2 className='font-bold text-xl'>{country.name.common}</h2>

        <div className='flex justify-between'>
            <div>
                <div>
                    <span className='font-semibold'>Native Name: </span>
                    <span>{country.name.common}</span>
                </div>
                <div>
                    <span className='font-semibold'>Population: </span>
                    <span>{country.name.common}</span>
                </div>
                <div>
                    <span className='font-semibold'>Region: </span>
                    <span>{country.name.common}</span>
                </div>
                <div>
                    <span className='font-semibold'>Sub Region: </span>
                    <span>{country.name.common}</span>
                </div>
                <div>
                    <span className='font-semibold'>Capital: </span>
                    <span>{country.name.common}</span>
                </div>
            </div>

            <div>
                <div>
                    <span className='font-semibold'>Top Level Domain: </span>
                    <span>{country.name.common}</span>
                </div>
                <div>
                    <span className='font-semibold'>Currencies: </span>
                    <span>{country.name.common}</span>
                </div>
                <div>
                    <span className='font-semibold'>Languages: </span>
                    <span>{country.name.common}</span>
                </div>
            </div>
        </div>

        <div>
            <span>Border Countries: </span>
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