import { useState, useEffect } from "react";
import { fetchCountries } from "../Global/fetch";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const fetchedCountries = async () => {
            try {
                const fetch = await fetchCountries('all')
                setCountries(fetch)
                console.log(fetch)

                setLoading(false)
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

  return (
    <div className="relative">
        <SearchFilter />
        {loading || !countries && <FontAwesomeIcon icon={faSpinner} spin className="h-20 absolute left-1/2 -translate-x-1/2" />}
        {countries && <RenderCountries />}
    </div>
  )
}

export default Home