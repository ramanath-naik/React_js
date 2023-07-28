// import React from 'react';
// import { useState,useEffect } from 'react';

// // export default function Task() {
// //     const [multiple,setMultiple]=useState(7);

// //     useEffect(()=>{
// //         setTimeout(()=>{
// //             setMultiple((multiple)=>multiple+7)
// //         },3000)
// //         if(multiple>=100){
// //             break;
// //         }
// //     })
        
    
// //   return (
// //     <div>
        
// //     </div>
// //   )
// // }
// import React, { useState, useEffect } from 'react';

// const Task = () => {
//   const [multiplesOfSeven, setMultiplesOfSeven] = useState(7);
//   const [status, setStatus] = useState("In Progress");
//   const [history, setHistory] = useState([]);

//   useEffect(() => {    
//     if (multiplesOfSeven < 22) {
//         setTimeout(() => {
//             setMultiplesOfSeven(multiplesOfSeven + 7)
//         }, 2000) 
//     }
//     else{
//         setStatus("completed") 
//     }
//   }, [multiplesOfSeven]); 
//   useEffect(() => {
//     setHistory([...history, multiplesOfSeven]);
//   }, [multiplesOfSeven, history]);

//   return (
//     <div>
//       <strong>{status}</strong>
//       {history.map((value, index) => (
//         <h2 key={index}>{value}</h2>
//       ))}   
//     </div>
//   );
// };

// export default Task;

import React, { useState, useEffect } from 'react';

const Task = () => {
  const [multiplesOfSeven, setMultiplesOfSeven] = useState(7);
  const [status, setStatus] = useState("In Progress");
  const [multiples, setmultiples] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (multiplesOfSeven < 22) {
      setTimeout(() => {
        setMultiplesOfSeven(multiplesOfSeven + 7);
        
      }, 2000);
    } else {
      setIsCompleted(true);
      setStatus("Completed");
    }
  }, [multiplesOfSeven]);

  useEffect(() => {
    if (!isCompleted) {
      
      const timer = setTimeout(() => {
        setmultiples([...multiples, multiplesOfSeven]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [multiplesOfSeven, multiples, isCompleted]);

  return (
    <div>
      <strong>{status}</strong>
      {multiples.map((value, index) => (
        <h2 key={index}>{value}</h2>
      ))}
    </div>
  );
};

export default Task;




