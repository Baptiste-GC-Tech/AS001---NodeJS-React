import { useEffect, useState } from 'react'
import { getAll } from '../api/PokemonUtilities'
import { useForm } from 'react-hook-form'
import PokeCard  from '../components/PokeCard'
import NavBar  from '../components/Nav.js'
import DeleteForm from '../components/DeleteForm'
 
function PokEdition(props)
{
    const [ pokemons, setPokemons] = useState([])
    const { register, handleSubmit } = useForm()
 
    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error => console.error("Bruh something went wrong : ", error.message))
    },[])
    
    let pokeCardRequired = []
    pokemons.map((pokemon, key) => {
        pokeCardRequired.push(
        <>
        <PokeCard pokemon = {pokemon}></PokeCard>
        <DeleteForm pokemon = {pokemon}></DeleteForm>
        </>
        )
    })

    const addPoke = async (data) => {
        console.log(data)
        const response = await fetch(
            'http://localhost:4444/pokemon/insert', {
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
 
    return <>
        <NavBar></NavBar>
        <h2>Ajoutez des pokemons à la base de donnée</h2>
        <form onSubmit={handleSubmit(addPoke)}>
            <input type="text" {...register("name")} placeholder="nom de votre pokemon" />
            <input type="text" {...register("img")} placeholder="lien de votre image" />
            <button type="submit">Ajouter</button>
        </form>
        <div>
            {pokeCardRequired}
        </div>
    </>
}
 
export default PokEdition