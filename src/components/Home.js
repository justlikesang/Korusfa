import React from 'react';

const Home = () => {
  return (
    <div>
      <div
        id="home"
        className="home-hero-section"
        style={{ backgroundImage: "url('/home_background.jpg')" }}
      >
        <div className="header-text-container">
          <h1 className="header-text">
            We Unite Opportunities Across the Pacific
          </h1>
          <h2 className="sub-text">
            Providing Financial and Strategic Advisory Services to Privately
            Held Technology and Healthcare Companies
          </h2>
        </div>
      </div>

      <div className="content-section">
        <div className="text-content">
          <h2 className="main-text">We're Bay Area based</h2>
          <h2 className="main-bold-text">Compact Boutqiue Investment Bank</h2>
          <p>
            KORUS Partners is a leading in independent investment banking
            advisory firm focused on senior-level expertise, long term
            relationships and objective guidance to privately held Technology
            and Healthcare companies.
          </p>
          <p>We offer comprehensive services to our clients including:</p>
          <ul>
            <li>mergers & acquisitions advisory</li>
            <li>capital raise advisory</li>
            <li>other corporate finance advisory services</li>
          </ul>
          <p>
            KORUS Partners was created to provide financial expertise that is
            unique, transparent and thorough, while always acting in our
            clients’ best interest.
          </p>
        </div>

        <div className="image-content" style={{ backgroundImage: "url('/invest_image.jpg')" }}/>
      </div>
    </div>
  );
};

export default Home;
