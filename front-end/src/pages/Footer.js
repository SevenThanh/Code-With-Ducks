import React from 'react';
import google from "../assets/google.png"
import apple from "../assets/apple.png"
import microsoft from "../assets/microsoft.png"
import meta from "../assets/meta.png"
import nvdia from "../assets/nvdia.png"
import amazon from "../assets/amazon.webp"
import oracle from "../assets/oracle.png"
import FAQ from '../components/FAQ';
import '../styles/Footer.css'



function Footer() {
  return (
    <footer>
      <section className='footer-container'>
        <div id="footer-title">
          <h2>Our students</h2>
          <span>intern at</span>
        </div>
        <div id="logos">
          <img id="google" src={google} alt="microsoft logo" />
          <img id="microsoft" src={microsoft} alt="microsoft logo" />
          <img id="meta" src={meta} alt="microsoft logo" />
          <img id="nvdia" src={nvdia} alt="microsoft logo" />
          <img id="amazon" src={amazon} alt="microsoft logo" />
          <img id="oracle" src={oracle} alt="microsoft logo" />
          <img id="google" src={google} alt="microsoft logo" />
          <img id="meta" src={meta} alt="microsoft logo" />
          <img id="nvdia" src={nvdia} alt="microsoft logo" />
          <img id="amazon" src={amazon} alt="microsoft logo" />
        </div>
      </section>
      <section className='faq-container'>
        <FAQ/>
      </section>
     <p>© 2024 Code with Ducks. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
