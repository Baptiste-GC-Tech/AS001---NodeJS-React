import { catchPokemon } from '../api/PokemonUtilities'
import { useEffect, useState } from 'react'
import { getAll } from '../api/PokemonUtilities'
import PokeCard  from '../components/PokeCard'
import NavBar  from '../components/Nav.js'
 
function PokEdition(props)
{
    const [ pokemons, setPokemons] = useState([])
 
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
        <button onClick={()=>catchPokemon(pokemon.catchPokemon)}>non je troll pas</button>
        </>
        )
    })
 
    return <>
        <NavBar></NavBar>
        <h2>Modifier la liste des pokémons dispos</h2>
        <form>
            <h3>Ajouter un Pokemon</h3>
            <label>
                Nom de votre pokemon :
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <div>
            {pokeCardRequired}
        </div>
    </>
}
 
export default PokEdition