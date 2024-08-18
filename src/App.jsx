import { useEffect, useState } from "react"
import Header from "./components/1-header/Header"
import Hero from "./components/2-hero/Hero"
import Main from "./components/3-main/Main"
import Contact from "./components/4-contact/Contact"

function App() {
useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500){
      setShowScrollBtn(true)
    }else{
      setShowScrollBtn(false)
    }
  })
},[])

const[showScrollBtn,setShowScrollBtn]=useState(false)

  return (
    <div id="up" className="container">
          <Header/>
          <Hero/>
          <div id="project" className="line"></div>
          <Main/>
          <div id="contact" className="line"></div>
          <Contact/>
          {/* <div className="line"></div> */}


            <a style={{opacity: showScrollBtn ? 1 : 0 , transition:"0.5s"}} href="#up">
            <button className="scrollToTop icon-keyboard_arrow_up"> </button>
            </a>
          
          
    </div>
  )
}

export default App
