import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Title'
import emailjs from "emailjs-com";
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qre179o",
        "template_uyerual",
        e.target,
        "user_ADefCkeIIcyTvOAfcoXmX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  
  return (
    <div>
      <Header />

      <section id="contact">
        <div className="container text-center">
          <form onSubmit={sendEmail}>
            <Title title="Contact us" className="center" />

            <div className="row text-left">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="usr">Full Name:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="usr"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="pwd">Email:</label>
                  <input
                    name="email"
                    autoComplete="off"
                    type="email"
                    className="form-control"
                    id="pwd"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row text-left">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="comment">Comment:</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="10"
                    id="comment"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" name="submit" className="more">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
      
      <div className="mt-3"></div>
      <Footer />
    </div>
  )
}

export default Contact