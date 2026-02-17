import './App.css'
import Header from './Com'
import Cards from './Cards'
import Button_soft from './Button_soft'

function App() {
let elm = <h1>Hello from elm variable</h1>
let studName = "John Doe"
let marks = 85
let total = 100
let css_prop = {color: "blue",backgroundColor: "yellow"}
  return (
    
    <>
      <Header />
      <Button_soft text="Click Here" />
      {elm}
      <p>Hello <span style={css_prop}>{studName}</span>, your marks are {marks} out of {total} total percentage is <span className='bg-yellow'>{marks/total*100}%</span></p>

      <Cards title="Mathematics" description="This is the Mathematics subject card."/>

      <Cards title="Science" description="This is the Science subject card."/>

      <Cards title="History" description="This is the History subject card."/>

      {/* <p>Hello <span style={{color: "blue"}}>{studName}</span>, your marks are {marks} out of {total} total percentage is {marks/total*100}%</p> */}
    </>
    
  )
}

export default App
