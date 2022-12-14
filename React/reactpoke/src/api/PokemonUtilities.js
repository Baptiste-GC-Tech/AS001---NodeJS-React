export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export const updatePoke = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'UPDATE', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: data.name
            })
        }
    )
    const pokemons = await response.json()
    return pokemons
}


export const addOne = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export const deleteOne = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/delete', {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

// ##############################################################################################

export const getPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokedex = await response.json()
    return pokedex
}

export const catchPokemon = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export const releasePokemon = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/delete', {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}