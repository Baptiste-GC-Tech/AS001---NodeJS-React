import { useForm } from 'react-hook-form'
import { PokemonUtilities } from '../api/PokemonUtilities'

export default function UpdateForm(props){
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} value={props.pokemon.name} />
            <input type="text" {...register("img")} value={props.pokemon.img} />
            <button type="submit">Heaven's Door</button>
        </form>
    </>
}