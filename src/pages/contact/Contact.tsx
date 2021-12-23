import React from 'react';
import { ContactContainer, LocationWrapper, Button } from './contactStyles';
import ScrollToTopOnMount from '../../components/helpers/ScrollToTopOnMount';
import data from './data';

const Contact = function () {
  const { text, bgs, bgl, canadaImage, australiaImage, ukImage } = data;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Thank you!');
    e.target.reset();
  };

  return (
    <section>
      <ScrollToTopOnMount />
      <ContactContainer bgs={bgs} bgl={bgl}>
        <div>
          <h1>Contact Us</h1>
          <p>{text}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="Email"
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Phone"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
          />
          <textarea name="text" id="text" placeholder="Your message" required />
          <button type="submit">Submit</button>
        </form>
      </ContactContainer>
      <LocationWrapper>
        <div>
          <div>
            <img src={canadaImage} alt="Canada" />
          </div>
          <h2>CANADA</h2>
          <Button to="/locations">SEE LOCATION</Button>
        </div>
        <div>
          <div>
            <img src={australiaImage} alt="Canada" />
          </div>
          <h2>AUSTRALIA</h2>
          <Button to="/locations">SEE LOCATION</Button>
        </div>
        <div>
          <div>
            <img src={ukImage} alt="Canada" />
          </div>
          <h2>UNITED KINGDOM</h2>
          <Button to="/locations">SEE LOCATION</Button>
        </div>
      </LocationWrapper>
    </section>
  );
};

export default Contact;
