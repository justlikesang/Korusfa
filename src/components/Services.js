import React from 'react';
import HeroImageComponent from './HeroImageComponent';

const Services = () => {
  return (
    <div className="services-wrapper">
      <div
        className="services-section"
        style={{ backgroundImage: 'url(/services_hero.jpg)' }}
      >
        <HeroImageComponent
          header={'Services'}
          text={
            'KORUS Partners is a boutique investment bank with expertise in mergers and acquisitions, capital markets, and other corporate finance advisory services.'
          }
        />
      </div>
      <div
        className="services-content"
        style={{ backgroundImage: 'url(/services_background.jpg)' }}
      >
        <div className="services-text-box-container">
          <div className="text-box">
            <h2>M&A</h2>
            <h4>Strategic Deal-making</h4>
            <p>
              We develop and drive strategy and planning, leading to effective
              partnering and M&A deal execution. Our reputation as a strategic
              dealmaker has been earned from our successful execution of
              Transactions and industry knowledge.
            </p>
          </div>
          <div className="text-box">
            <h2>Capital Raise</h2>
            <h4>Growth & Recapitalization</h4>
            <p>
              Our Financial Advisory practice specializes in helping clients
              partner with a comprehensive investor target list that is
              comprised of Synergistic Enterprises, Venture Capital Funds,
              Private Equity Funds, and Family Offices.
            </p>
          </div>
          <div className="text-box">
            <h2>Consulting</h2>
            <h4>Management Advisory</h4>
            <p>
              We leverage our insights and expertise to help shape strategic
              thought as you pursue your next steps. We focus on driving
              decision-making for traditional partnerships, M&A and financings
              as well as alternative approaches such JVs and spin-outs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
