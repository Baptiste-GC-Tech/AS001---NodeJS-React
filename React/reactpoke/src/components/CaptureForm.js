import { useForm } from 'react-hook-form'

function CaptureForm(props){
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        const response = await fetch(
            'http://localhost:4444/pokedex/insert', {
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
            <input type="hidden" {...register("name")} value={props.pokemon.name} />
            <input type="hidden" {...register("img")} value={props.pokemon.img} />
            <button type="submit">Capturer</button>
        </form>
    </>
}
export default CaptureForm