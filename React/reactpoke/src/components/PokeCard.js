import 'PokeCard.css'

function PokeCard(props){
    return <>
    <div>
        <p>{props.pokemon.name}</p>
        <img src={props.pokemon.img}/>
    </div>
</>
}

export default PokeCard