import React, { useState } from 'react';
import './Css/Header.css'
import "./Css/App.css"
import Header from "./Components/Header";
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import { LanguageProvider } from './Components/LanguageProvider';
import Insurance from './Pages/Insurance';





function App(){

   

    return(
        <>

        <LanguageProvider>
        
        <Header />
            <ScrollToTop />
        <Routes>

        <Route path='/vps2' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Insurance' element = {<Insurance />} />
        <Route path='/Contact' element={<Contact />} />

        </Routes>
        <Footer />
        </LanguageProvider>
        
        </>
    );
}


export default App;
