import { memo } from "react"
import React from 'react'

 function Child1({counterTwo,fun}) {
    console.log("child component");
  return (
    <div>
        <h1>Child component</h1>

    </div>
  )
}
export default memo(Child1);
