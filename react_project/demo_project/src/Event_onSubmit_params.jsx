import Button_soft from "./Button_soft"

function Button_params(props) {
    const handleSubmit = (event_text) => {
        alert(event_text)
    }
    return(
        <Button_soft text="Submit" onClick={()=>{handleSubmit(props.button_text)}}/>
    )  
    
}

export default Button_params