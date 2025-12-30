import React from 'react';
import HeroImageComponent from './HeroImageComponent';
// import tonyHuangImg from '../assets/tony_huang.jpg';

const Team = () => {
  return (
    <div className="team-wrapper">
      <div
        className="services-section"
        style={{ backgroundImage: 'url(/team_hero.jpg)' }}
      >
        <HeroImageComponent
          header={'Team'}
          text={
            'We integrate the transactions of Capital Raise and M&A for innovative technology and healthcare companies across the Pacific with strategic management consulting.'
          }
        />
      </div>
      <div className="team-section">
        <h6>
          Founded in 2014, we have successfully completed over 20 engagements
          with clients in Start-up, Pre-IPO Stage, Venture Capital Fund, Private
          Equity Fund.
        </h6>
        <div className="team-container">
          <div className="members-section">
            <div className="member">
              <img src="/tony_huang.jpg" alt="" />
              <p>Tony Huang, Partner</p>
            </div>
            <div className="member">
              <img src="/don_suh.jpg" alt="" />
              <p>Don Suh, Partner</p>
            </div>
            <div className="member">
              <img src="/jonathan_hull.jpg" alt="" />
              <p>Jonathan Hull, Partner</p>
            </div>
            <div className="member">
              <img src="/joon_lee.jpg" alt="" />
              <p>Joon Lee, Partner</p>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="past-capital-container">
          <h2>Major Past Capital Raises</h2>
          <img src="/past_capital.jpg" alt="" />
        </div>
        <br/>
        <br/>
        <div className="major-past-exits">
          <h2>Major Past Exits</h2>
          <img src="/major_past_exits.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Team;
