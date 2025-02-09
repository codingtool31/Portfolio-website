


/* eslint-disable react/no-unescaped-entities */
import '../Components/Hero.css';
import Profile2 from '../assets/Profile2.jpg';
import resumePDF from '../assets/javeria resume (2).pdf'; 

const Hero = () => {
  return (
    <div className="hero">
      <img src={Profile2} alt="Profile" />
      <h1><b>I'm Javeria Meer, </b> a MERN stack developer.</h1>
      <p>
        I’m a passionate MERN stack developer with a focus on building full-stack web applications. I specialize in creating dynamic, scalable, and efficient applications using MongoDB, Express.js, React.js, and Node.js. My experience includes developing real-time applications, RESTful APIs, and integrating third-party services.
      </p>

      <div className="hero-action">
       
        <a href="#contact">
          <div className="hero-connect">
            Connect with me
          </div>
        </a>

       
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">
            My resume
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
