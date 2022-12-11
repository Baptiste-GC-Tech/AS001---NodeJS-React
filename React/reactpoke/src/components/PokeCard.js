import './PokeCard.css'

function PokeCard(props){
    return <>
    <div>
        <p>{props.pokemon.name}</p>
        <img src={props.pokemon.img} alt=""/>
    </div>
</>
}

export default PokeCard