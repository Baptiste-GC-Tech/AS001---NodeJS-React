import './PokeCard.css'

function PokeCard(props){
    return <>
    <div className="pokecard">
        <p>{props.pokemon.name}</p>
        <img src={props.pokemon.img} alt=""/>
    </div>
</>
}

export default PokeCard