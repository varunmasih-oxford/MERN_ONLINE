import Button_soft from "./Button_soft"
import { useState } from "react";

let visit_count = 2000

function CounterApp(){
    const [count,setCount] = useState(visit_count)

    return(
        <>
            <h2>Total Visit : {count}</h2>
            <Button_soft text="Add" onClick={()=>{setCount(count+1)}} />
            <Button_soft text="Multiply" onClick={()=>{setCount(count*2)}} />
        
        </>
    )
}

export default CounterApp