import React from 'react'
import Features from './Features'
import About from './About'
import Author from './Author'
import Customers from './Customers'
import Pricing from './Pricing'
import CTA from './CTA'
import Footer from './Footer'
import Accueil from './Accueil'
import Header from './Header'

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="row">
        <Accueil />
        <Features />
        <About />
        <Author />
        <Customers />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
