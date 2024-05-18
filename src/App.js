import React from 'react';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";
// import Signup from './Components/Signup/Sign';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stream from './Components/Stream/Stream';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to= "/Movies"/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/Stream' element = {<Stream/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
