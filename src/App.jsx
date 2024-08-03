import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Componants/Home'
import MyNavBar from './Componants/MyNavBar'
import About from './Componants/About'
import Contact from './Componants/Contact'
import MyState from './MyState'
import MyForm from './MyForm'
import RoutingNavBar from './Componants/RoutingNavBar'
import MyRoutes from './Componants/MyRoutes'

function App() {

  return (
    <>
      {/* <MyNavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
        <MyForm/>
      </section>
      <MyState/> */}

      {/* <RoutingNavBar/> */}
      <MyRoutes />
    </>
  )
}

export default App
