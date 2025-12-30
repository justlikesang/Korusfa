import React from 'react';
import HeroImageComponent from './HeroImageComponent';

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div
        className="services-section"
        style={{ backgroundImage: 'url(/contact_hero.jpg)' }}
      >
        <HeroImageComponent
          header={'Contact Us'}
          text={
            'Our team brings deep and trusted financial advisory experience. For inquiries regarding our advisory and related services, please contact us today.'
          }
        />
      </div>
      <div
        className="content-wrapper"
        style={{ backgroundImage: 'url(/contact_background.jpg)' }}
      >
        <div className="content-section contact">
          <div className="contact-left">
            <h3>Contact An Advisor</h3>
            <p>Please send the following information to donsuh@korusfa.com</p>
            <ul>
              <li>Name</li>
              <li>Email</li>
              <li>Phone</li>
              <li>Subject & message</li>
            </ul>
          </div>
          <div className="contact-right">
            <h2>KORUS PARTNERS - LET'S TALK.</h2>
            <p>
              Thank you for your interest. We look forward to discussing how we
              can help you realize your vision for the future.
            </p>
            <br />
            <p>We’re ready to help, just complete our form or call us today.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
