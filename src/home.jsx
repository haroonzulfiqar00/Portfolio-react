import React, { useState, useRef } from 'react';
import Header from "./header";
import Footer from "./footer";
import Form from './form';
import Info from './info';
import Skills from './skills';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const form = useRef();


  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  

  return (
    <>
      <Header />
      <div className="banner">
        <div className="row m-0">
          <div className="col-lg-10 p-0">

            <div className='bio-data'>
              <div className='portfolio-dp'>
              <img src="./public/portfolio-dp.svg" alt="" />
              </div>

              <div className='' id='main-sec'>
                <section class="nerdy-pen">
                <h1 class="nerdy-pen__text">Hi, I'm <span className=''>Haroon Zulfiqar</span></h1>
                  <span class="txt-rotate" data-period="2000" data-rotate='[ "Web Developer.", "Designer.", "Reactjs.", "Blockchain.", "fun!" ]'></span>
                  <p className='py-3 w-75 text-center'>Hello! I'm [Haroon Zulfiqar], a passionate and creative front-end web developer with [2] years of experience in building responsive, user-friendly websites and applications. I specialize in crafting engaging digital experiences using modern web technologies.</p>
                  <button className="btn-global">  More about me</button>
                </section>
              </div>

            </div>
          </div>

          <div className="col-lg-2">
            <div className='h-100 d-flex justify-content-end align-items-center'>
              <div className='d-flex flex-column gap-4 logo-btns' id='side-bar'>
                <a href="#main-sec"><img src="portfolio-home.png" alt="" /></a>
                <a href="#about-me"><img src="portfolio-about.png" alt="" /></a>
                <a href="#skills"><img src="portfolio-skills.png" alt="" /></a>
                <a href="#"><img src="portfolio-Experience.png" alt="" /></a>
                <a href="#form-here"><img src="portfolio-contact-me.png" alt="" /></a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Info />
      <Skills />
      <Form />
      <Footer />
    </>
  )
}

export default Home;
