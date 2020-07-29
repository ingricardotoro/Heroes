import React, { useMemo } from 'react'
import queryString from 'query-string'//para obtener las variables del URL

import { HeroCard } from '../heroes/HeroCard'
import { useFrom } from '../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroByName } from '../../selectors/getHeroByName'

export const SearchScreen = ({ history }) => {
    /*obtenermos los valores del URL*/
    const location = useLocation()
    //console.log(queryString.parse(location.search));
    const { query = '' } = queryString.parse(location.search); //obtenemos el query que viene del url
    /********************* */


    const initialForm = { searchText: query }

    const [formValues, handleInputChange, reset] = useFrom(initialForm)
    const { searchText } = formValues



    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?query=${searchText}`)
        reset()
    }

    //const heroesFiltered = getHeroByName(searchText)
    //la funcion solo se activara cuando cambie el query
    const heroesFiltered = useMemo(() => getHeroByName(query), [query])

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="searchText"
                            className="form-control"
                            placeholder="Find a Hero"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn btn-block btn-outline-info mt-1"
                        >Search...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (query === '') &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (query === '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-info">
                            There is not a hero with {query}
                        </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
