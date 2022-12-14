function CaptureForm(props){
    return <>
        <form onSubmit={props.onSubmit}>
            <input type="hidden" name="name" value={props.pokemon.name} />
            <input type="hidden" name="img" value={props.pokemon.img} />
            <button type="submit">Capturer</button>
        </form>
    </>
}
export default CaptureForm