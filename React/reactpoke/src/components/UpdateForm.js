import { useForm } from 'react-hook-form'

export default function UpdateForm(props){
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        const response = await fetch(
            'http://localhost:4444/pokemon/update', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    img: data.img
                })
            }
        )
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} value={props.pokemon.name} placeholder="pute"/>
            <input type="text" {...register("name")} value={props.pokemon.img} placeholder="pute"/>
            <button type="submit">Heaven's Door</button>
        </form>
    </>
}