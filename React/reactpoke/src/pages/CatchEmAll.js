import { Link } from "react-router-dom" 
import { useEffect, useState } from 'react'
import { getAll , getPokedex} from '../api/PokemonUtilities'
import PokeCard from '../components/PokeCard'

import './CatchEmAll.css'

function CatchEmAll(props)
{
    const [ pokedex, setPokedex] = useState([])
    const [ pokemons, setPokemons] = useState([])

    useEffect(() => {
        const pokedexFetched = getPokedex()
        pokedexFetched
            .then(result => setPokedex(result))
            .catch(error => console.error("Bruh something went wrong : ", error.message))
    },[])
    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error => console.error("Bruh something went wrong : ", error.message))
    },[])

    let knownPokemons = []
    pokedex.map((pokemon, key) => {
        knownPokemons.push( <PokeCard pokemon = {pokemon}></PokeCard> )
    })

    let unknownPokemons = []
    pokemons.map((pokemon, key) => {
        if (knownPokemons.indexOf( <PokeCard pokemon = {pokemon}></PokeCard> ) == -1)
        {
            unknownPokemons.push(<PokeCard pokemon = {pokemon}></PokeCard>)
        }
    })

    // let arr = ['zero','one','two']
    // console.log(arr.indexOf('one'))
    // console.log(arr.indexOf('two'))
    // console.log(arr.indexOf('three'))


    return <>
    <h1>Navigation</h1>
        <ul>
            {/* <li><Link to="/">CatchEmAll</Link></li> */}
            <li><Link to="/pokemons">PokeList</Link></li>
            <li><Link to="/pokedit">PokEdit</Link></li>
        </ul>
    <h2>Votre pokedex</h2>
    {knownPokemons}
    <br />
    <h2>Pokemons inconnus</h2>
    {unknownPokemons}
    </>
}

export default CatchEmAll