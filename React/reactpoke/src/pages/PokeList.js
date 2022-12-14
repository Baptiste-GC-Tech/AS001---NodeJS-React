import { useEffect, useState } from 'react'
import { getAll, catchPokemon } from '../api/PokemonUtilities'
import { useForm } from 'react-hook-form'
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
        // console.log("ntm la centenaire")
        // console.log("Got body from PokeList.js :", JSON.stringify({name: data.name, img: data.img}))
    }

    console.log("coucou")

    let pokeCardList = []
    pokemons.map((pokemon, key) => {
        pokeCardList.push(
        <>
            <PokeCard pokemon = {pokemon}></PokeCard>
            <CaptureForm onSubmit={handleSubmit(onSubmit)} pokemon={pokemon}></CaptureForm>
        </>)
    })

    return <>
        <NavBar></NavBar>
        <h1>La liste des pokémons disponibles</h1>
        {pokeCardList}
    </>  
}

export default PokeList