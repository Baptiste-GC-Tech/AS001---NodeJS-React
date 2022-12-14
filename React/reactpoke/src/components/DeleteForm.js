import { useForm } from 'react-hook-form'

export default function DeleteForm(props){
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        let response = await fetch(
            'http://localhost:4444/pokemon/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name: data.name
                })
            }
        )
        response = await fetch(
            'http://localhost:4444/pokedex/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name: data.name
                })
            }
        )
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register("name")} value={props.pokemon.name} />
            <button type="submit">Supprimer</button>
        </form>
    </>
}