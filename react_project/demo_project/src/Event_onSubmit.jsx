import Button_soft from "./Button_soft"

function Submit() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(e.target[0].value)
    }
    return(
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' />
        <Button_soft text="Submit" type="submit"/>
    </form>    )
}

export default Submit