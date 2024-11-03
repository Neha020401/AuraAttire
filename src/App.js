import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Header/Nav';
// import SignIn from './components/Body/SignIn';
import Auth from './components/Body/Authentication/Auth';
import Card from './components/Body/Card';
import Brand from './components/Body/Brand'
import Trends from './components/Body/Trends';
import ProductContainer from './components/ProductContainer';
import NotFound from './components/Body/NotFound';
import Home from './components/Body/HomeComponent/Home';
import AboutUs from './components/Body/AboutUs';
import MemberShip from './components/Body/MemberShip';
import MyFavorite from './components/Body/MyFavorite';
import MyShop from './components/Body/MyShop';
import CustomService from './components/Body/CustomService';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route  excat path='/' element={<Home/>}/>
        <Route path="/card" element={<Card />} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/brands" element={<Brand />} />
        <Route path='/newin' element={<Trends/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/membership' element={<MemberShip/>}/>
        <Route path='/myFavorite' element={<MyFavorite/>}/>
        <Route path='/myshop' element={<MyShop/>}/>
        <Route path='/custom-service' element={<CustomService/>}/>
        <Route path='/products' element={<ProductContainer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
