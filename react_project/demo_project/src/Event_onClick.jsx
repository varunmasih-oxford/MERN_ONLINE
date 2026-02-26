import Button_soft from './Button_soft'; 

function Event(props) {
    let evntHandler = () => {
        alert(props.message)
    }

    return(
        <Button_soft text="Event Button" onClick={evntHandler}/>
    )
}

export default Event