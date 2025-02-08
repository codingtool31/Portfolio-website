
import './MyWork.css';

import project1 from '../assets/WhatsApp Image 2025-01-31 at 08.53.41_d948ebcd.jpg';
import project2 from '../assets/WhatsApp Image 2025-01-31 at 08.56.34_4a79f722.jpg';
import project3 from '../assets/WhatsApp Image 2025-01-31 at 08.57.39_da3e8789.jpg';
import project5 from '../assets/WhatsApp Image 2025-01-31 at 09.00.14_10caf9c5.jpg';
import project6 from '../assets/WhatsApp Image 2025-01-31 at 09.11.44_6dda7f81.jpg';
import project8 from '../assets/WhatsApp Image 2025-01-31 at 09.12.41_40544050.jpg';

import { useState } from 'react';

const MyWork = () => {
  const [zoomedImage, setZoomedImage] = useState(null);  

  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="my-work">
      <h1>My Work</h1>
      <div className="project-grid">
        <div className="project-item" onClick={() => handleImageClick(project1)}>
          <img src={project1} alt="Project 1" />
          <p>Password Generator</p>
        </div>
        <div className="project-item" onClick={() => handleImageClick(project2)}>
          <img src={project2} alt="Project 2" />
          <p>Medical Chatbot</p>
        </div>
        <div className="project-item" onClick={() => handleImageClick(project3)}>
          <img src={project3} alt="Project 3" />
          <p>Netflix Clone</p>
        </div>
        <div className="project-item" onClick={() => handleImageClick(project5)}>
          <img src={project5} alt="Project 5" />
          <p>Weather Forecast App</p>
        </div>
        <div className="project-item" onClick={() => handleImageClick(project6)}>
          <img src={project6} alt="Project 6" />
          <p>Salon Booking System</p>
        </div>
        <div className="project-item" onClick={() => handleImageClick(project8)}>
          <img src={project8} alt="Project 8" />
          <p>Salon Management System</p>
        </div>
      </div>

     
      {zoomedImage && (
        <div className="zoomed-modal" onClick={handleCloseZoom}>
          <img src={zoomedImage} alt="Zoomed Project" className="zoomed-img" />
        </div>
      )}
    </div>
  );
};

export default MyWork;
