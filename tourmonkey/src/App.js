import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages.js/Home';
import SearchAppBar from './components/Appbar';
import Tour from './pages.js/Tour';


function App() {
  return (
    <BrowserRouter>
    <SearchAppBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<Tour/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
