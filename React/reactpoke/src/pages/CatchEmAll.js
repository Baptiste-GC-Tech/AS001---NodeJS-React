import { Link } from "react-router-dom"

function CatchEmAll(props){
    return <nav>
        <h1>Binvenue_sur_la_base_de_donnée_pokemons_!</h1>
        <div className="">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/pokemons">Liste_des_pokemons</Link></li>
                <li><Link to="/pokedit">Votre_pokedex</Link></li>
            </ul>
        </div>
    </nav>
}

export default CatchEmAll