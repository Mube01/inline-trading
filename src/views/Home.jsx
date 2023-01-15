import React from 'react'
import Header from '../components/Header'
import img from "../images/scope.jpg"
import Title from '../components/Title'
import ProductCard from '../components/ProductCard'
import denim from '../images/Denim.jpg'
import lumix from '../images/Lumix.jpg'
import Perfo from '../images/Perfo.jpg'
import img1 from '../images/img4.jpg'
import img2 from '../images/img7.jpg'
import img3 from '../images/img23.jpg'
import img4 from '../images/img36.jpg'
import img5 from '../images/img41.jpg'
import img6 from '../images/img46.jpg'
import img7 from '../images/img51.jpg'
import img8 from '../images/img172.jpg'
import img9 from '../images/img179.jpg'
import img10 from '../images/img184.jpg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Carousel from 'better-react-carousel'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md" data-aos="fade-right">
            <img src={img} alt="" className='logo-center' />
          </div>
          <div className="col-md head-text" data-aos="fade-left">
            Scope Lubricants offers high quality and durability lubricants and specialty greases to its customers that is geared to protect machinery and equipment across all environments and weather conditions.
            <br /><br />
            Scope Lubricants products range from Automotive, Marine, Industrial, Hydraulic, Brake Fluids, Gear oil, ATF, cutting oil and other specialty lubricants, as well as Lithium and Calcium. The products meet or exceed the quality requirements of international organizations such as: SAE, ACEA, API, ISO and NLGI, OEM (Volvo/ Porsche/ Mercedes-Benz/ MAN/ Cummins) approvals.
            <br /><br />
            <b>Inline Trading PLC</b> is proud to announce it's the sole distrubuter and marketer of Scope Lubricants and Greases in Ethiopia.
          </div>
        </div>
      </div>
      <hr className='divider' />
      <div className="container">
        <div className="row">
          <div className="col">
            <Title title="Scope Lubricants" className="center" />
          </div>
        </div>
        <div className="row">
            <ProductCard img={denim} text="SAE 20W50" />
            <ProductCard img={lumix} text="SAE 5W30" />
            <ProductCard img={Perfo} text="SAE 15W40" />
        </div>
        <div className="row text-center">
          <div className="col">
            <Link to="/products">
              <button className="more">View More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="yellow mt-3" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col">
              <Title title="Certificates" className="center" />
            </div>
          </div>
          <div className="row">
          <Carousel cols={3} rows={1} gap={10} loop scrollSnap showDots autoplay={3000}>
      <Carousel.Item>
        <img width="100%" src={img1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img4} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img5} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img6} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img7} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img8} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img9} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img10} alt="" />
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
          <div className="col">
            <Title title="Location" className="center" />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p>
              <i className="fas fa-map-marker-alt"></i> Lideta Woreda 09 Shop No 303, Addis Ababa,
              Ethiopia
            </p>
          </div>
        </div>
      </div>
      
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe width="600" height="500" title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=garad%20tekle&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home