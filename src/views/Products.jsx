import React from 'react'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Header from '../components/Header'
import denim from '../images/Denim.jpg'
import lumix from '../images/Lumix.jpg'
import Perfo from '../images/Perfo.jpg'
import drum from '../images/Drum.jpg'
import grease from '../images/Grease.jpg'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <Title title="Products" className="center" />    
          </div>
        </div>
        <div className="row">
          <ProductCard img={denim} text="SAE 20W50" />
          <ProductCard img={lumix} text="SAE 5W30" />
          <ProductCard img={Perfo} text="SAE 15W40" />
        </div>
        <div className="row mb-5">
          <ProductCard img={drum} text="SAE 15W40 Drum" />
          <ProductCard img={grease} text="Grease NGLI-3" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products