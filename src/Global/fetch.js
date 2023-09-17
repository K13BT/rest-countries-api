const BASE_URL = 'https://restcountries.com/v3.1'

export const getCountryNameByCode = async (code) => {
    const fetchCountryByCode = await fetchCountries(`${BASE_URL}/alpha/${code}/?fields=name`)
    return fetchCountryByCode
}

export const getSingleCountry = async (name) => {
    const fetchSingleCountry = await fetchCountries(`${BASE_URL}/name/${name}/?fields=flags,name,currencies,tld,borders,population,region,subregion,capital,languages`)

    if (fetchSingleCountry.length === 0) {
        return {}
    }

    return fetchSingleCountry.find(country => country.name.common.toLowerCase() === name.toLowerCase())
}

export const getAllCountries = async () => {
    const fetchAllCountries = await fetchCountries(`${BASE_URL}/all/?fields=capital,flags,name,population,region`)
    return fetchAllCountries
}

export const filterByRegion = async (region) => {
    if (region === 'all') {
        return await getAllCountries()
    }

    const fetchByRegion = await fetchCountries(`${BASE_URL}/region/${region}/?fields=capital,flags,name,population,region`)
    return fetchByRegion
}

export const searchCountries = async (name) => {
    if (name === '') {
        return await getAllCountries()
    }
    const searchCountries = await fetchCountries(`${BASE_URL}/name/${name}/?fields=flags,name,currencies,tld,borders,population,region,subregion,capital,languages`)

    return searchCountries
}

const fetchCountries = async (url) => {  
    try {
        const response = await fetch(url)
        const countries = await response.json()

        if (!response.ok) {
            return []
        }
        return countries
    } catch (err) {
        console.log(err);
        return []
    }
}
