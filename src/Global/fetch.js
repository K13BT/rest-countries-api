const BASE_URL = 'https://restcountries.com/v3.1'

export const getCountryNameByCode = async (code) => {
    try {
        const fetchCountryByCode = await fetchCountries(`${BASE_URL}/alpha/${code}/?fields=name`)
        return fetchCountryByCode
    } catch (err) {
        console.log(err)
    }
}

export const getSingleCountry = async (name) => {
    try {
        const fetchSingleCountry = await fetchCountries(`${BASE_URL}/name/${name}/?fields=flags,name,currencies,tld,borders,population,region,subregion,capital,languages`)
        return fetchSingleCountry[0]
    } catch (err) {
        console.log(err)
    }
}

export const getAllCountries = async () => {
    try {
        const fetchAllCountries = await fetchCountries(`${BASE_URL}/all/?fields=capital,flags,name,population,region`)
        return fetchAllCountries
    } catch (err) {
        console.log(err)
    }
}

export const filterByRegion = async (region) => {
    try {
        if (region === 'all') {
            return await getAllCountries()
        }

        const fetchByRegion = await fetchCountries(`${BASE_URL}/region/${region}/?fields=capital,flags,name,population,region`)
        return fetchByRegion
    } catch (err) {
        console.log(err)
    }
}

export const searchCountries = async (name) => {
    try {
        if (name === '') {
            return await getAllCountries()
        }
        const searchCountries = await fetchCountries(`${BASE_URL}/name/${name}/?fields=flags,name,currencies,tld,borders,population,region,subregion,capital,languages`)

        return searchCountries
    } catch (err) {
        console.log(err)
    }
}

const fetchCountries = async (url) => {  
    try {
        const fetchCountries = await fetch(url)
        const response = await fetchCountries.json()
        return response
    } catch (err) {
        console.log(err);
    }
}
