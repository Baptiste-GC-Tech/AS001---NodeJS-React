import { useEffect, useState } from 'react'
import { getAll } from '../api/PokemonUtilities'
import PokeCard from '../components/PokeCard'

import './PokeList.css'

function CatchEmAll(props)
{
    const [ pokemons, setPokemons] = useState([])

    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error => console.error("Bruh something went wrong : ", error.message))
    },[])

    // console.log("printing {pokemons}...")
    // console.log(pokemons)
    // console.log("Done !")

    let pokeCardRequired = []
    pokemons.map((pokemon, key) => {
        console.log(pokemon)
        pokeCardRequired.push(<PokeCard pokemon = {pokemon}></PokeCard>)
    })

    return <>
        <h1>La liste des pokémons disponibles</h1>
        {pokeCardRequired}
    </>  
}

export default CatchEmAll