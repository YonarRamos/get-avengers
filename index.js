import uniqueRandomArray from 'unique-random-array';

import avengers from './assets/avengersList.json' assert { type: "json" }

export const getAll = () => {
    return avengers
}

export const getRamdom = () => {
    const random = uniqueRandomArray(avengers);
    return random()
}

export const getOne = (index) => {
    if (index <= avengers.length) {
        return avengers[index]
    }
    return 'No existe'
}
//1.2
/* export const getByName = (name) => {
    if(name ) {
        const hero = avengers.find( item => item.name.toLowerCase().includes(String(name).toLowerCase()) || item.hero.toLowerCase().includes(String(name).toLowerCase()))
        if(hero) return hero        
    }

    return 'No existe'
} */

console.log(getByName())