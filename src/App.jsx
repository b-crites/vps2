import React from 'react';
import './Css/Header.css'
import "./Css/App.css"
import Header from "./Components/Header";
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import PatientModal from './Components/PatientRequest';
import ScrollToTop from './Components/ScrollToTop';



function App(){

    return(
        <>
        
        <Header />
            <ScrollToTop />
        <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />

        </Routes>
        <Footer />
        
        </>
    );
}


export default App;