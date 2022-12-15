import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function UpdateForm(props){
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        let response = await fetch(
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
        response = await fetch(
            'http://localhost:4444/pokedex/update', {
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

    const [ formValues, setFormValues] = useState({name: props.pokemon.name, img: props.pokemon.img})

    const changeName = event => {
        setFormValues({name: event.target.value, img: formValues.img})
    }
    const changeImg = event => {
        setFormValues({name: formValues.name, img: event.target.value})
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="name" value={props.pokemon.name} />
            <input type="text" {...register("newName")} value={formValues.name} onChange={changeName} />
            <input type="text" {...register("newImg")} value={formValues.img} onChange={changeImg} />
            <button type="submit">Modifier</button>
        </form>
    </>
}