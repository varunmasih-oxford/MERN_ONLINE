import './Cards.css'
import Button_soft from './Button_soft';

function Cards(props) {
  return (
    <div className="cards">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Button_soft text={`Learn ${props.title}`} />
    </div>
  )
}

export default Cards