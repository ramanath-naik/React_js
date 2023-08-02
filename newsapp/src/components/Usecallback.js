import React, { useCallback, useState } from 'react'
import Child1 from './Child1';


export default function Usecallback() {
    const [counterOne,setcounterOne] =useState(0);
    const [counterTwo,setcounterTwo] =useState([]);


    const IncrementOne=()=>{
        setcounterOne(counterOne+1)
    }
    const fun=useCallback(()=>{
        console.log("hello")

    },[counterTwo])
    
  return (
    <div>
        <Child1 counterTwo={counterTwo} fun={fun}/>
        <button onClick={IncrementOne}>counterOne-{counterOne}</button>
        
    </div>
  )
}
