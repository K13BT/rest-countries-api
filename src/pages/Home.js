import { useState, useEffect } from "react";
import { getAllCountries } from "../Global/fetch";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";
import { searchCountries } from "../Global/fetch";

const Home = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchedCountries = async () => {
            try {
                const fetch = await getAllCountries('all')
                setCountries(fetch)
            } catch (err) {
                console.log(err)
            }
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
        try {
            const searchedCountries = await searchCountries(search)
            setCountries(searchedCountries)
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className="relative">
        <SearchFilter onSearch={onSearch}/>

        {countries && <RenderCountries />}
    </div>
  )
}

export default Home