import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import Socios from './components/views/Socios';
import Servicios from './components/views/Servicios';
import SitiosOficiales from './components/views/SitiosOficiales';
import Novedades from './components/views/Novedades';
import AreaSocios from './components/views/AreaSocios';
import Contacto from './components/views/Contacto';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/socios' element={<Socios></Socios>}></Route>
        <Route exact path='/servicios' element={<Servicios></Servicios>}></Route>
        <Route exact path='/sitiosOficiales' element={<SitiosOficiales></SitiosOficiales>}></Route>
        <Route exact path='/novedades' element={<Novedades></Novedades>}></Route>
        <Route exact path='/areaSocios' element={<AreaSocios></AreaSocios>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
