import React from 'react';
import ScaleIndicator from './scale_indicator';
import profileImage from './../../../assets/img/og-image.jpg';
import SkillSet from '../data';
//import './_about.scss';

const AboutPage = () => (
  <section className="About-wrapper">
    <main className="About-container">
      <img className="About-image" src={profileImage} alt="Jacob Gonzalez" />
      <article className="About-main">
        <h1 className="About-title">Hi! my name is Jacob Gonzalez, Currently I'm freelancer developer</h1>
        <p className="About-description">
          I've working as freelance developer for 4 years in
          diferents projects like videogames
          ans websites or web applications. I have
          always been insterested in the web development,
          currently, I use ReactJS and other libraries for
          improve the user experience of my web projects
        </p>
      </article>
    </main>
    <div className="About-skillContainer">
      <h2 className="About-skillTitle">Skillset</h2>
      {SkillSet.map(item => (
        <div key={item.name.slice(0, 3)} className="About-skill">
          <strong>{item.name}</strong>
          <span>{item.items}</span>
          <ScaleIndicator value={item.level} />
        </div>
      ))}
    </div>
  </section>
);

export default AboutPage;
