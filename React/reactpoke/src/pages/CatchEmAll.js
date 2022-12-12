import { Link } from "react-router-dom" 
import { useEffect, useState } from 'react'
import { getAll , getPokedex} from '../api/PokemonUtilities'
import PokeCard from '../components/PokeCard'

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
    let pokeCradList = []
    pokedex.map( async (pokemon, key) => {
        pokeCradList.push( <PokeCard pokemon = {pokemon}></PokeCard> )
    })

    return <>
    <h1>Navigation</h1>
        <ul>
            <li><Link to="/pokemons">PokeList</Link></li>
            <li><Link to="/pokedit">PokEdit</Link></li>
        </ul>
    <h2>Votre pokedex</h2>
    {pokeCradList}
    </>
}

export default CatchEmAll