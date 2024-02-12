import logo from './logo.svg';
import './App.css';
import HomePageComponent from './components/HomePageComponent';
import PageTwoComponent from './components/PageTwoComponent';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//what is a functional component it is a function that returns JSX
function App() {
  return (
    //Browser Router enables clientside routing (Routes pages without full page refreshing page reloading)
    <BrowserRouter>

      <NavbarComponent />
   {/* //Routes is used for your route structure  */}
      <Routes>
        {/* Route defines our path to the individual components */}
        {/* '/' is our default route */}
        <Route path = '/' element = {<HomePageComponent />} />
        <Route path='pageTwo' element={<PageTwoComponent />}/>
        
      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
