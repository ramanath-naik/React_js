import React, { useContext } from 'react'
import {data,data1} from './Usecontext'

export default function ChildB() {
    const nm = useContext(data);
    const gender = useContext(data1);
  return (
    <div>
        <h1>Hii My name is {nm} and my gender is {gender}</h1>

    </div>
  )
}
