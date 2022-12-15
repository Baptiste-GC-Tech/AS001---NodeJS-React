import { Link } from "react-router-dom"

import './Nav.css'
 
export default function NavBar(props){
    return <nav className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokemons">PokeList</Link></li>
            <li><Link to="/pokedit">PokEdit</Link></li>
        </ul>
    </nav>
}
