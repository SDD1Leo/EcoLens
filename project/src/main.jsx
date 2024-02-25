import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
// import Signup from './pages/SignUpPage.jsx';
import Tiger from './pages/Tiger.jsx';
import Footer from './components/Footer.jsx';
import Community from './pages/Community.jsx';
import Monitoring from './pages/Monitoring.jsx';
import Elephant from './pages/Elephant.jsx';
import { ClerkProvider } from "@clerk/clerk-react";
import {dark} from "@clerk/themes";
import SignUpPage from './pages/SignUpPage.jsx';
import SignInPage from './pages/SignInPage.jsx';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
ReactDOM.createRoot(document.getElementById('root')).render(
<ClerkProvider  appearance={{
        baseTheme: dark
      }}  publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
  <div className='w-screen h-screen relative overflow-auto bg-green-500'>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/community' element={<Community/>}></Route>
      <Route path='/signin' element={<SignInPage/>}></Route>
      <Route path='/signup' element={<SignUpPage/>}></Route>
      <Route path='/monitoring' element={<Monitoring/>}></Route>
      <Route path='/monitoring/tiger' element={<Tiger/>}></Route>
      <Route path='/monitoring/elephant' element={<Elephant/>}></Route>
    </Routes>
    <Footer/>
    </div>
   
  </BrowserRouter>
  </ClerkProvider>
)
