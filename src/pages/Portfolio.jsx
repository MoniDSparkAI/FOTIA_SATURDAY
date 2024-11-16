import React, {  useEffect } from 'react';
import './portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Portfolio = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
  return (
    <div className="portfolio-container">
     <header className="portfolio-header">
  <h1 data-aos="fade-up">Fotia Crypto Investment Portfolio</h1>
  <p data-aos="fade-up">
    At Fotia, we are committed to creating long-term value for our investors through strategic investments in the cryptocurrency space.
  </p>
</header>

      <section className="investment-section">
      <h2 data-aos="fade-up">Our Focus</h2>
        <div className="investment-intro">
        
          <h3 data-aos="fade-up">
            We proudly announce our strategic investments in <b>crypto real estate</b> and <b>blockchain-based infrastructure projects</b>, capitalizing on the growing opportunities in the digital economy.
          </h3>
        </div>

        <div className="investment-cards">
          <div className="investment-card" data-aos="fade-right">
            <h3>Crypto Real Estate</h3>
            <p>
              Investing in luxury virtual properties on platforms like Decentraland and Sandbox, offering our investors a chance to own assets in the metaverse.
            </p>
          </div>
          <div className="investment-card" data-aos="fade-left">
            <h3>Blockchain Infrastructure</h3>
            <p>
              Supporting infrastructure projects like blockchain-based smart contracts, decentralized finance platforms, and public transaction systems.
            </p>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <h2 data-aos="fade-up">Investment Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-item" data-aos="fade-left">
            <h3>Diversified Portfolio</h3>
            <p>
              Investments across crypto real estate and blockchain infrastructure ensure reduced risk and optimized returns.
            </p>
          </div>
          <div className="highlight-item" data-aos="fade-up">
            <h3>Strong Growth Potential</h3>
            <p>
              Crypto projects are on the rise, with increasing adoption and demand for decentralized solutions.
            </p>
          </div>
          <div className="highlight-item" data-aos="fade-right">
            <h3>Experienced Team</h3>
            <p>
              Our experts in crypto and blockchain investments bring in-depth knowledge to manage assets effectively.
            </p>
          </div>
          <div className="highlight-item" data-aos="fade-up">
            <h3>Transparency</h3>
            <p>
              We provide regular updates, using blockchain to offer verifiable reports and ensure accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Investment Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card" data-aos="fade-left">
            <h3>High Returns</h3>
            <p>
              With the growing crypto market, our investments offer the potential for significant growth.
            </p>
          </div>
          <div className="benefit-card" data-aos="fade-up">
            <h3>Portfolio Diversification</h3>
            <p>
              Crypto investments provide diversification opportunities, reducing risk in traditional portfolios.
            </p>
          </div>
          <div className="benefit-card" data-aos="fade-right">
            <h3>Secure Investments</h3>
            <p>
              Our blockchain-backed investments ensure security and stability for investors.
            </p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2>Our Process</h2>
        <div className="process-timeline">
          <div className="timeline-step" data-aos="fade-left">
            <div className="step-number">1</div>
            <h3>Selection</h3>
            <p>
              Identifying crypto projects with strong growth potential and sound fundamentals.
            </p>
          </div>
          <div className="timeline-step" data-aos="fade-right">
            <div className="step-number">2</div>
            <h3>Due Diligence</h3>
            <p>
              Rigorous analysis of smart contracts, tokenomics, and project viability.
            </p>
          </div>
          <div className="timeline-step" data-aos="fade-left">
            <div className="step-number">3</div>
            <h3>Execution</h3>
            <p>
              Partnering with leading platforms to acquire and manage crypto assets.
            </p>
          </div>
          <div className="timeline-step" data-aos="fade-right">
            <div className="step-number">4</div>
            <h3>Monitoring</h3>
            <p>
              Continuous tracking of blockchain performance metrics and market trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
