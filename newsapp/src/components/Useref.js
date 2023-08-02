import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

export default function Useref() {

    const refElement= useRef("");
    const count=useRef(0);
    const[name,setName]=useState("ramu");
    // const [count,setCount]=useState();
    useEffect(()=>{
        // setCount(count+1);
        count.current=count.current+1;
    })
    console.log(refElement);
    function Reset(){
        setName("");
        refElement.current.focus() //useref is used to access dom element
    }

  return (
    <div>
        <h1>Learning useref</h1>
        <input ref={refElement} type="text" value={name} on onChange={(e)=> setName(e.target.value)}></input>
        <button onClick={Reset}>Reset</button>
        <p>Number of times render: {count.current}</p>

    </div>
  )
}
