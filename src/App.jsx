import React, {useState} from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
// import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
// import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"


const App = () => {
  
  const [nav, setNav] = useState("");

  const updateData = (name) =>{
    setNav(name)
  }

  return (
    <>
        <Header />
        <Nav navData={nav}/>
        <About updateData={updateData}/>
        <Experience updateData={updateData}/>
        {/* <Services/> */}
        <Portfolio updateData={updateData}/>
        {/* <Testimonials/> */}
        <Contact updateData={updateData}/>
        <Footer/>
    </>
  )
}

export default App