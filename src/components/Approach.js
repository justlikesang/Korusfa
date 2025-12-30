import React from 'react';
import HeroImageComponent from './HeroImageComponent';

const Approach = () => {
  return (
    <div className="approach-wrapper">
      <div
        className="services-section"
        style={{ backgroundImage: 'url(/approach_hero.jpg)' }}
      >
        <HeroImageComponent
          header={'Our Approach'}
          text={
            "We are here to provide financial expertise that is unique, transparent, and thorough, while always acting in our clients' best interest."
          }
        />
      </div>

      <div className="content-section approach">
        <div className="text-content">
          <h2 className="main-bold-text">
            We begin every engagement with a deep and thorough preparation
            process.
          </h2>
          <p>
            Our approach is designed to focus on our client’s needs and
            requirements and get to know the business to identify the right
            targets for Capital, M&A and Partner. We study every detail and
            anticipate every question that will be asked to make sure thare are
            no surprises when we get to the finish line.
          </p>
          <br />
          <p>
            KORUS Partners provides aligned strategic and financial advisory
            services to healthcare companies companies of all sizes. We work
            with companies across multiple verticals in Technology and
            Healthcare that align with our expertise and in doing so, we create
            lasting, confidential partnerships with our clients, ensuring best
            in class outcomes each and every time.
          </p>
        </div>
        <div
          className="image-content"
          style={{ backgroundImage: "url('/approach_image.jpg')" }}
        />
      </div>
    </div>
  );
};

export default Approach;
