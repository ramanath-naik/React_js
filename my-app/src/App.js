
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
 
  Route,
  Routes,
  
  Link
} from "react-router-dom";




// import { Button } from '@mui/material';

function App() {
  
  const [mode,setMode] = useState("light");//whether dark mode is enbled or not

  const [alert,setAlert]= useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);

    },2000)

  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - dark mode';
    }
  }
  return (
   <>
    {/* <Button variant="contained">click</Button>  */}
    <Router>
      
    <Navbar title='TextUtils' about='About' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <Routes><Route path="/about" element={<About/>}/></Routes>
          {/* <Route path="/about" element={<About/>}/> */}
        
        
          <Routes><Route path="/" element={<TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode={mode}/>}/></Routes>
          
        
    
  
    </div>
    
    </Router>

   </>
  );
}

export default App;
