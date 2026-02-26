import './button_soft.css';

function Button_soft(props) {
    return (
        <button className="button-soft" onClick={props.onClick}>{props.text}</button>
    )
}

export default Button_soft;