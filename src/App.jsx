import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import { useState } from 'react';
import { AuthLayout } from './components/AuthLayout';
import { FormsTitle } from './components/FormsTitle';
import { LabelInput } from './components/LabelInput';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ButtonPageHome } from "./components/ButtonPageHome";
import { MetricCard } from './components/MetricCard';
import { MetricSubCard } from './components/MetricSubCard';
import { BookCard } from './components/BookCard';
import { ValuesCard } from "././components/ValuesCard";
import { TeamCard } from "././components/TeamCard";
import { PageLogin } from './pages/PageLogin';
import { PageRecoverPassword1 } from './pages/PageRecoverPassword1';
import { PageRecoverPassword2 } from './pages/PageRecoverPassword2';
import { PageRegistration } from './pages/PageRegistration';
import { PageHome } from "./pages/PageHome";
import { PageCollection } from "./pages/PageCollection";
import { PageAboutUs } from "./pages/PageAboutUs";
import { PageContact } from "./pages/PageContact";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PageHome/>} />
        <Route path="/pagerecoverpassword1" element={ <PageRecoverPassword1/>} />
        <Route path="/pagerecoverpassword2" element={ <PageRecoverPassword2/>} />
        <Route path="/PageRegistration" element={ <PageRegistration/>} />
      </Routes>
    </BrowserRouter>
    </>

    
  )
}

export default App