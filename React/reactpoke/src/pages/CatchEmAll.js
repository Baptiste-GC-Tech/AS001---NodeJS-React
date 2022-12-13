import { Link } from "react-router-dom" 
import { useEffect, useState } from 'react'
import { getAll , getPokedex} from '../api/PokemonUtilities'
import PokeCard from '../components/PokeCard'
import NavBar from '../components/Nav'

function CatchEmAll(props)
{
    // Définition des 2 liste de pokemons venant des 2 collections
    const [ pokedex, setPokedex] = useState([])
    const [ pokemons, setPokemons] = useState([])

    // Remplissage des 2 listes d'au-dessus, d'abord de puis pokedex, puis pokemon
    useEffect(() => {
        const pokedexFetched = getPokedex()
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Bruh something went wrong : ", error.message))
    },[])
    console.log("Printing pokedex...")
    console.log(pokedex)
    console.log("Done")
    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error => console.error("Bruh something went wrong : ", error.message))
    },[])

    // Remplissage de la liste de composant à afficher (Entrée du pokedex)
    let pokeCardList = []
    pokedex.map( async (pokemon, key) => {
        pokeCardList.push( <PokeCard pokemon = {pokemon}></PokeCard> )
    })

    return <>
    <NavBar></NavBar>
    <h2>Votre pokedex</h2>
    {pokeCardList}
    </>
}

export default CatchEmAll