import { Link } from "react-router-dom"
 
export default function NavBar(props){
    return <nav className="navbar">
        <h1>Navigation</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokemons">PokeList</Link></li>
            <li><Link to="/pokedit">PokEdit</Link></li>
        </ul>
    </nav>
}
