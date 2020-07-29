import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams()

    const hero = getHeroById(heroId)

    if (hero.length === 0) {
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero[0]

    const handleclick = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes-img/${heroId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {alter_ego} </li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher} </li>
                    <li className="list-group-item"><b>first appearance:</b> {first_appearance} </li>
                </ul>

                <h5>characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info" onClick={handleclick} >Return</button>
            </div>
            <h1>HeroScreen</h1>
        </div>
    )
}
