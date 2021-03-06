import React, { useEffect } from 'react'
import './App.css'
import About from './partials/Work'
import Card from './partials/Card'
import Intro from './partials/Intro'
import Footer from './partials/Footer'
import Skills from './partials/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      once: true
    })
  })
  return (
    <div className=" Background
     py-1 px-4 sm:px-5 bg-gray-800">

    <div data-aos="fade-down" data-aos-duration="800">
        <Card/>
        <Intro/>
        <About/>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
       <Skills/>
       <Footer/>
      </div>
    </div>

  )

  }
      


export default App;
