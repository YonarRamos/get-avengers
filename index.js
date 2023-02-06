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
