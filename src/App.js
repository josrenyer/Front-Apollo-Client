import React from "react"
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.js"
import About from "./Pages/About.js"
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import {Header, Main, Container} from "./Styles"



function App() {

    return <Container>
      <Header>
        <Navbar/>
      </Header>
      <Main>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </Main>
      <Footer/>
    </Container>
  
}

export default App;
