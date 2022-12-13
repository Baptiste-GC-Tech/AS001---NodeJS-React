import { useEffect, useState } from 'react'
import { getAll, catchPokemon } from '../api/PokemonUtilities'
import { useForm } from 'react-hook-form'
import PokeCard from '../components/PokeCard'
import NavBar from '../components/Nav'

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


    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const response = await fetch(
            'http://localhost:4444/pokedex/insert', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    img: data.img
                })
            }
        )
    }

    let pokeCardList = []
    pokemons.map((pokemon, key) => {
        pokeCardList.push(
        <>
            <PokeCard pokemon = {pokemon}></PokeCard>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("name")} value={pokemon.name} />
                <input type="hidden" {...register("img")} value={pokemon.img} />
                <button type="submit">Capturer</button>
            </form>
        </>)
    })

    return <>
        <NavBar></NavBar>
        <h1>La liste des pokémons disponibles</h1>
        {pokeCardList}
    </>  
}

export default PokeList