import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact'
import intro from '../assets/images/intro.jpg';
import product1 from '../assets/images/products-01.jpg';
import product2 from '../assets/images/products-02.jpg';

const IndexPage = () => (
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
              If you need assistance with removing a bee hive or swarm near you home - we can help.  
              Get in touch today about our bee removal and relocation services. 
              You'll bee happy that you did! 
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/#">
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
                  <strike>&nbsp;Extermination&nbsp;</strike> Humane & Gentle
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
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Bee Educated</span>
                <span className="section-heading-lower">Did You Know?</span>
              </h2>
              <p className="mb-0">
              <strong>Bees pollinate 1 in 3 bites of food we eat. </strong>
              Bees are an essential part of our agriculture, and their health directly impacts food security.
              </p>
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
              <p className="mb-0">
                
              </p>
              <Contact />
              <p className="mb-0">
                <br/>
                <br/>We are available 24/7 for a free consulation. 
                <br/>Text or call us for a fast responce 
                <br/>
                <a href='tel:+18589227537'>(858) 922-7537</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
