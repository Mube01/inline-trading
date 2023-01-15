import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Title'
import logo from '../images/logo.jpg'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <Title title="About Us" className="center" />
           </div>
        </div>
        <div className="row">
          <div className="col-md" data-aos="fade-right">
            <img src={logo} alt="" className='logo-center2' />
          </div>
          </div>
          <div className="row">
          <div className="col-md text-center my-4">
            Inline Trading PLC is a new company that is trying to bring quality lubricants and greases to Ethiopian market.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About