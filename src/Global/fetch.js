export const fetchCountries = async (searchBy, name) => {
    const BASE_URL = 'https://restcountries.com/v3.1/'

    const url = name ? `${BASE_URL}/${searchBy}/${name}` : `${BASE_URL}/${searchBy}`
    
    try {
        const fetchCountries = await fetch(url)
        const response = await fetchCountries.json()
        return response
    } catch (err) {
        console.log(err);
    }
}