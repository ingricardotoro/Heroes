const { heroes } = require("../data/heroes");

export const getHeroByName = (name) => {

    name = name.toLocaleLowerCase()
    if (name === '') {
        return []
    }

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))

}
