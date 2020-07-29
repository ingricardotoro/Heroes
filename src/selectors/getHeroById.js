const { heroes } = require("../data/heroes");

export const getHeroById = (id) => {

    return heroes.filter(hero => hero.id === id)

}
