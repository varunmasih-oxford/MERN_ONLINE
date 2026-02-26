import { useState } from 'react'

function Change() {
   const [state, setState] = useState("Text will be shown here")
   const handleChange = (e) => {
      setState(e.target.value)
   }
    return(
        <>
        <input type="text" onChange={handleChange}/>
        <p>{state}</p>
        </>
    )
}

export default Change