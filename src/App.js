import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default  function App() {


    const pageSize=9;

        return(
          <div>
            <BrowserRouter>
            <Navbar />
            <Routes>
           <Route  path='/'  element ={<News key="general"  pageSize={pageSize} country="in" category="general" />} />
            <Route  path='/business' element={<News key="business"   pageSize={pageSize} country="in" category="business"/>} />
            <Route  path='/entertainment'element={<News key="entertainment"  pageSize={pageSize} country="in" category="entertainment" />}/>
            <Route  path='/health'element={<News key="health"  pageSize={pageSize} country="in" category="health" />}/>
            <Route  path='/science'element={<News key="science"  pageSize={pageSize} country="in" category="science" />}/>
            <Route  path='/sports'element={<News key="sports"  pageSize={pageSize} country="in" category="sports" />}/>
            <Route  path='/technology'element={<News key="technology"  pageSize={pageSize} country="in" category="technology" />}/>
           </Routes>
            </BrowserRouter>
          </div>
        )

    }





