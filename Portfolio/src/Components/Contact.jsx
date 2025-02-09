
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
     
      <p>If you have any queries or need help with a project, feel free to get in touch with me through any of the platforms below. I look forward to connecting!</p>

      <div className="social-icons">
     
        <a
          href="https://wa.me/+923354979693"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>

      
        <a
          href="https://www.linkedin.com/in/javeriameer173/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>

      
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=javeriameer612@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-google"></i>
          <span>Gmail</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
