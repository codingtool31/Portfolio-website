
import './Services.css';  
import { useState } from 'react';

const Services = () => {
  
  const [activeService, setActiveService] = useState(null);

  
  const serviceDetails = [
    {
      title: "Custom Web Application Development",
      description: "Build scalable and secure web applications using the MERN stack tailored to your business needs.",
      moreInfo: "I specialize in creating robust, secure applications that are highly customizable to meet the needs of modern businesses. My experience includes implementing APIs, user authentication, and integrating third-party services like payment gateways and cloud storage."
    },
    {
      title: "Real-Time Web Applications",
      description: "Develop real-time applications with features like live chat, notifications, and updates using WebSockets.",
      moreInfo: "Real-time web apps can significantly improve user engagement. I’ve worked on building collaborative tools, live dashboards, and notifications that update dynamically without needing to refresh the page."
    },
    {
      title: "Database Design & Optimization",
      description: "Design and optimize MongoDB databases for performance and scalability, ensuring smooth data handling.",
      moreInfo: "Efficient database design is crucial for performance. I specialize in creating optimized schemas, indexing strategies, and sharding techniques to ensure data retrieval is quick and scalable."
    },
    {
      title: "Authentication & Authorization Systems",
      description: "Implement secure login systems, OAuth, and JWT authentication to keep your applications safe.",
      moreInfo: "I implement secure authentication methods using JWT and OAuth. I ensure that your apps are safe from unauthorized access and can scale while maintaining high security."
    },
    {
      title: "Progressive Web Apps (PWA) Development",
      description: "Build fast, reliable, and engaging web apps with offline functionality and native-like features.",
      moreInfo: "PWAs allow users to experience your app even when they’re offline. I create fast, reliable web apps that offer native-like features, including push notifications and home screen installation."
    },
    {
      title: "Custom CMS Development",
      description: "Create custom content management systems to help businesses manage their website content easily.",
      moreInfo: "I build custom CMS solutions that allow businesses to manage and update their website content effortlessly. The system is tailored to meet your exact needs and integrates with the technologies you use."
    }
  ];

  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
        {serviceDetails.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
          
            {activeService === index && <p className="more-info">{service.moreInfo}</p>}

            <a 
              href="#" 
              className="read-more"
              onClick={(e) => {
                e.preventDefault(); // Prevent page reload
                setActiveService(activeService === index ? null : index); // Toggle visibility of service info
              }}
            >
              {activeService === index ? "Show Less" : "Read More"} <span>&#8594;</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
