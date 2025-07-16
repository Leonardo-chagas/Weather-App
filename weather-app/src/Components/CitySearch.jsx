import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import axios from "axios";

export default function CitySearch({onSearchChange}) {
    const [search, setSearch] = useState(null);

    const apiKey = import.meta.env.VITE_API_KEY;

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    /* const loadOptions = (inputValue) => {
        axios.get("http://api.weatherapi.com/v1/search.json?key="+apiKey+"&q="+inputValue).then(
            response => {
                console.log(response.data);
                return{
                    options: response.data.map((city) => {
                        return {
                            value: city.name,
                            label: `${city.name}, ${city.region}`,
                        };
                    }),
                };
            }
        ).catch(error=> {
      console.error(error);
    });
    } */

    const loadOptions = async (inputValue) => {
        try{
            const response = await axios.get("http://api.weatherapi.com/v1/search.json?key="+apiKey+"&q="+inputValue)
            return{
                options: response.data.map((city) => {
                    return {
                        value: city.name,
                        label: `${city.name}, ${city.region}`,
                    };
                }),
            };
        }
        catch(error) {
            console.error(error);
        }
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '5px',
            border: '2px solid #ccc',
            boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#3699FF' : null,
            color: state.isFocused ? 'white' : 'black',
        }),
    }

    return(
        <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={customStyles}
        />
    )
}