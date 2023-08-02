import React, { useMemo, useState } from 'react'

export default function Usememo() {
    const [add,setAdd]=useState(0);
    const [minus,setMinus]= useState(100);

    const multiplication= useMemo(function multiplication(){
        console.log("........")
        return add*10;
    },[add])
  return (
    <div>
        {multiplication}<br/>
        <button onClick={()=>setAdd(add+1)}>Addition</button>
        <span>{add}</span><br/>
        <button onClick={()=>setMinus(minus-1)}>Substraction</button>
        <span>{minus}</span>
    </div>
  )
}
