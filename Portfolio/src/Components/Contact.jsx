// // import React from 'react';
// import './Contact.css'; // Make sure to style it

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <h2>Contact Me</h2>
//       <p>If you would like to get in touch, feel free to contact me via any of the platforms below:</p>

//       <div className="social-icons">
//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/+923354979693"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="icon-link"
//         >
//           <i className="fab fa-whatsapp"></i>
//           <span>WhatsApp</span>
//         </a>

//         {/* LinkedIn */}
//         <a
//           href="https://www.linkedin.com/in/javeriameer173/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="icon-link"
//         >
//           <i className="fab fa-linkedin"></i>
//           <span>LinkedIn</span>
//         </a>

//         {/* Gmail */}
//         <a
//   href="https://mail.google.com/mail/?view=cm&fs=1&to=javeriameer612@gmail.com"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="icon-link"
// >
//   <i className="fab fa-google"></i>
//   <span>Gmail</span>
// </a>

//       </div>
//     </div>
//   );
// };

// export default Contact;
// import React from 'react';
import './Contact.css'; // Ensure the CSS file is linked

const Contact = () => {
  return (
    <div className="contact-container">
      {/* <h2>Contact Me</h2> */}
      <p>If you have any queries or need help with a project, feel free to get in touch with me through any of the platforms below. I look forward to connecting!</p>

      <div className="social-icons">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+923354979693"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/javeriameer173/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>

        {/* Gmail */}
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
