import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact'
import intro from '../assets/images/intro.jpg';
import product1 from '../assets/images/products-01.jpg';
import product2 from '../assets/images/products-02.jpg';
import JSConfetti from 'js-confetti'


const IndexPage = () => {
  const isBrowser = typeof window !== "undefined"
  
  const handleClick = () => {
    if(isBrowser) {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
        emojis: ['🐝', '🍯', '😍'],
      })
    }
  }
  
  return (
    <Layout activeLink="home">
      <section className="page-section clearfix" id="Bee-Removal-Relocation">
        <div className="container">
          <div className="intro">
            <img
              className="intro-img img-fluid mb-3 mb-lg-0 rounded"
              src={intro}
              alt="Bee Removal Services"
            />
            <div className="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Live Swarm & Hive</span>
                <span className="section-heading-lower">Bee Removal</span>
              </h2>
              <p className="mb-3">
                If you need assistance with removing a bee hive or swarm near your home - we can help.  
                Get in touch today about our bee removal and relocation services. 
                You'll bee happy that you did! 
              </p>
              <div className="intro-button mx-auto">
                <a className="btn btn-primary btn-xl" href="#Bee-Relocation">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="page-section" id="Bee-Relocation">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ml-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                     Humane & Gentle
                  </span>
                  <span className="section-heading-lower">
                    Relocation
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={product1}
              alt="Humane Live Bee Relocation"
            />
            <div className="product-item-description d-flex mr-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Bees are not pests. Occasionally bees can set up homes in areas that are inconvenient to humans.  
                  Our approach is a gentle relocation that provides bees a new home where they can pollinate gardens, 
                  produce honey and live happily ever after. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner text-center rounded">
                <div className="section-heading mb-4 h2">
                  <span className="section-heading-upper">Bee Educated</span>
                  <span className="section-heading-lower">Did You Know?</span>
                </div>
                <p className="mb-0">
                  <strong>Bees pollinate 1 in 3 bites of food we eat. </strong>
                  Bees are an essential part of our agriculture, and their health directly impacts food security.
                </p>
                <div className="intro-button mx-auto mt-4">
                  <button className="btn btn-light btn-xl" onClick={handleClick}>
                    Click here if you 💕 Bees!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="Beekeeper-Services">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex mr-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                    Experienced & Proffesional
                  </span>
                  <span className="section-heading-lower">
                    Beekeeper 
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={product2}
              alt="Experienced & Proffesional Beekeeper"
            />
            <div className="product-item-description d-flex ml-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                    Get beekeeping advice and education from a pleasant professional near you.  
                    From hive inspection, maintenance, to re-queening a hive and honey extraction.  
                    We are happy to assist with all your beekeeping needs. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section cta" id="Contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner text-center rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">We'll Bee Happy to Help</span>
                  <span className="section-heading-lower">Get in Touch</span>
                </h2>
                <Contact />
                <br />
                <ul className="list-unstyled list-hours mb-5 text-center mx-auto">
                  <li className="list-unstyled-item list-hours-item"> </li>
                  <li className="list-unstyled-item list-hours-item">
                    Available 24/7 
                  </li>
                  <li className="list-unstyled-item list-hours-item">
                    Free Consulation
                  </li>
                  <li className="list-unstyled-item list-hours-item">
                    Fast Responce
                  </li>
                  <li className="list-unstyled-item list-hours-item">
                    Text or Call
                  </li>
                  <li className="list-unstyled-item list-hours-item">
                    <a href='tel:+18589227535'>(858) 922-7535</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
