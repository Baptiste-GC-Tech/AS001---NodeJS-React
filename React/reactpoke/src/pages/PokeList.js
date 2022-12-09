import { useEffect, useState } from 'react'
import { getAll } from '../api/PokemonUtilities'
import PokeCard from '../components/PokeCard'

function PokeList(props){
    const [ pokemons, setPokemons ] = useState([]);

    useEffect(() => { 
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <>
      {
        pokemons.map((pokemon,key) =>{
          return <PokeCard pokemon={pokemon} />
        })
      }
    </>
}

export default PokeList