
import './Services.css';  

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
    

        <div className="service-card">
          <h3>Custom Web Application Development</h3>
          <p>Build scalable and secure web applications using the MERN stack tailored to your business needs.</p>
          <a href="#" className="read-more">
            Read More <span>&#8594;</span>
          </a>
        </div>

        <div className="service-card">
          <h3>Real-Time Web Applications</h3>
          <p>Develop real-time applications with features like live chat, notifications, and updates using WebSockets.</p>
          <a href="#" className="read-more">
            Read More <span>&#8594;</span>
          </a>
        </div>

        <div className="service-card">
          <h3>Database Design & Optimization</h3>
          <p>Design and optimize MongoDB databases for performance and scalability, ensuring smooth data handling.</p>
          <a href="#" className="read-more">
            Read More <span>&#8594;</span>
          </a>
        </div>

      

        <div className="service-card">
          <h3>Authentication & Authorization Systems</h3>
          <p>Implement secure login systems, OAuth, and JWT authentication to keep your applications safe.</p>
          <a href="#" className="read-more">
            Read More <span>&#8594;</span>
          </a>
        </div>

        <div className="service-card">
          <h3>Progressive Web Apps (PWA) Development</h3>
          <p>Build fast, reliable, and engaging web apps with offline functionality and native-like features.</p>
          <a href="#" className="read-more">
            Read More <span>&#8594;</span>
          </a>
        </div>

        <div className="service-card">
          <h3>Custom CMS Development</h3>
          <p>Create custom content management systems to help businesses manage their website content easily.</p>
          <a href="#" className="read-more">
            Read More <span>&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
