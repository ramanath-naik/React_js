import React, { createContext } from 'react'
import ChildA from './ChildA';


const data=createContext();
const data1= createContext();
 function Usecontext() {

    const name="ramu";
    const gender="Male";
  return (
    <div>
        <data.Provider value={name}>
            <data1.Provider value={gender}>
            <ChildA/>
            </data1.Provider>
        </data.Provider>
        
    </div>
  )
}
export default Usecontext;
export  {data,data1}
