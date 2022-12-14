import { useEffect, useState } from 'react'
import { getAll } from '../api/PokemonUtilities'
import NavBar from '../components/Nav'
import PokeCard from '../components/PokeCard'
import CaptureForm from '../components/CaptureForm'

import './PokeList.css'

function PokeList(props)
{
    const [ pokemons, setPokemons] = useState([])

    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error => console.error("Bruh something went wrong : ", error.message))
    },[])

    let pokeCardList = []
    pokemons.map((pokemon, key) => {
        pokeCardList.push(
        <>
            <PokeCard pokemon = {pokemon}></PokeCard>
            <CaptureForm pokemon = {pokemon}></CaptureForm>
        </>)
        console.log("Printing current attempt...")
        console.log(pokemon.name)
        console.log("Done !")
    })

    return <>
        <NavBar></NavBar>
        <h1>La liste des pokémons disponibles</h1>
        {pokeCardList}
    </>  
}

export default PokeList