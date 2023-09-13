import { fetchCountries } from "./fetch";

export const fetchCountryByCode = async (code) => {
    try {
        const fetchCountryByCode = await fetchCountries('alpha', code)
        return fetchCountryByCode[0]
    } catch (err) {
        console.log(err)
    }
}

export const fetchSingleCountry = async (name) => {
    try {
        const fetchSingleCountry = await fetchCountries('name', name)
        return fetchSingleCountry[0]
    } catch (err) {
        console.log(err)
    }
}