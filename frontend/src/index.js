import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import HomePage from './landing_page/home/HomePage';
import AboutPage from'./landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SignupPage from './landing_page/signup/Signup';
import ProductsPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage'
import Navbar from './landing_page/NavBar';
import Footer from './landing_page/Footer';
import PageNotFound from './landing_page/PageNotFound';
import Login from './landing_page/login/loginPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
    <BrowserRouter>
     <Navbar/>
    <Routes>
     
      <Route path='/' element={ <HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path="/login" element={<Login />} />
      
      <Route path='*' element={<PageNotFound/>}/>
     
    </Routes>
    <Footer/>
    </BrowserRouter>
 
);

