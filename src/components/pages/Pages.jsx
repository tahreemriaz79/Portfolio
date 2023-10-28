import React from 'react'
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from '../home/Home';
import Footer from '../footer/Footer';
import About from '../about/About';
import Header from '../header/Header';
import Templates from '../templates/Templates1';
import Contact from '../contact/Contact';

const Pages = () => {
  return (
  <>
  <Router>
  <Header />
 
        <Switch>
          
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/templates' component={Templates}/>
          <Route exact path='/contact' component={Contact}/>



        </Switch>
        <Footer/>
    </Router>
  </>
  )
  
}

export default Pages
