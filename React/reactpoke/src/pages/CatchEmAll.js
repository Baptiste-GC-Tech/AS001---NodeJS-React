import { Link } from "react-router-dom" 

function CatchEmAll(props){
    return <>
    <h1>Ajouter des pokémons à votre pokédex</h1>
    <p>bla bla</p>
        <ul>
            <li><Link to="/">CatchEmAll</Link></li>
            <li><Link to="/pokemons">PokeList</Link></li>
            <li><Link to="/pokedit">PokEdit</Link></li>
        </ul>
    </>
}

export default CatchEmAll