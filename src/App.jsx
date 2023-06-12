import React, {useState} from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"


const App = () => {
  const [myProjectDone, setMyProjectDone] = useState(0);
  const [nav, setNav] = useState("");

  const updateData = (name) =>{
    setNav(name)
  }

  const onClick = (amountOfWorks) => {
    setMyProjectDone(amountOfWorks)
  }

  return (
    <>
        <Header/>
        <Nav navData={nav}/>
        <About updateData={updateData}  myProjectDone={myProjectDone}/>
        <Experience updateData={updateData}/>
        <Portfolio updateData={updateData} onClick={onClick}/>
        <Contact updateData={updateData}/>
        <Footer/>
    </>
  )
}

export default App