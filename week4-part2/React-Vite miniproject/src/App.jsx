import React, { useState } from "react";
import Navbar from '../components/navbar'
import Home from '../components/home'
import About from '../components/about'
import Services from '../components/service'
import Contact from '../components/contact'


const App = () => {
    const [activePage, setActivePage] = useState("home");
  return (
    
    <div>
      <Navbar setActivePage={setActivePage} />
     <div style={{ padding: "20px" }}>
        {activePage === "home" && <Home />}
        {activePage === "about" && <About />}
        {activePage === "services" && <Services />}
        {activePage === "contact" && <Contact />}
      </div>
    </div>
  )
}

export default App

