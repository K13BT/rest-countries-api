import { useState, useEffect } from "react";
import { filterByRegion, getAllCountries } from "../Global/fetch";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";
import { searchCountries } from "../Global/fetch";
import NoCountryFound from "../components/NoCountryFound";
import Loading from "../components/Loading";

const Home = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchedCountries = async () => {
            setLoading(true)
            const fetch = await getAllCountries('all')
            setLoading(false)
            setCountries(fetch)
        }
        fetchedCountries()
    }, [])

    // Render countries
    const RenderCountries = () => {
        return (
            <div className="grid lg:grid-cols-4 gap-20 mx-20 my-10">
            {countries.map((country, index) => <CountryCard country={country} key={index} />)}
            </div>
        )
    }

    // Search
    const onSearch = async (search) => {
        const searchedCountries = await searchCountries(search)
        setCountries(searchedCountries)
    }

    // Filter
    const onFilter = async (region) => {
        const filteredCountries = await filterByRegion(region)
        setCountries(filteredCountries)
    } 

  return (
    <div className="relative">
        <SearchFilter onSearch={onSearch} onFilter={onFilter} />

        {loading ? <Loading /> : countries.length === 0 ? <NoCountryFound /> : <RenderCountries />}
    </div>
  )
}

export default Home